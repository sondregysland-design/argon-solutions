"use client";

import { useEffect, useRef } from "react";

const MAX_RY = 27; // grader sideveis
const MAX_RX = 15; // grader opp/ned
const MAX_RZ = 1.2; // bitteliten hode-tilt for organisk følelse
const STIFFNESS = 110; // fjærkonstant
const ZETA = 0.92; // like under kritisk dempet: et lite, organisk oversving
const IDLE_AFTER_MS = 2600;
const BOB_AMPLITUDE = 2.2; // px kontinuerlig "pust"

function clamp(v: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, v));
}

export function ClaudeMonitor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<SVGSVGElement>(null);
  const contentRef = useRef<SVGGElement>(null);
  const glareRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const rig = rigRef.current;
    const shadow = shadowRef.current;
    const content = contentRef.current;
    const glare = glareRef.current;
    if (!wrapper || !rig || !shadow || !content || !glare) return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Skjermen snur seg mot pekeren som et hode (look-at), drevet av en
    // dempet fjær i stedet for lerp: tidsbasert, så bevegelsen er identisk
    // på 60 og 144 Hz, og den lander mykt uten å stoppe brått.
    //
    // Ytelse: pointermove lagrer bare rå koordinater (ingen layout-les i
    // event-handleren; den kan fyre >120 Hz). Senterpunktet caches og
    // invalideres på scroll/resize, så tick leser layout kun når noe
    // faktisk har flyttet seg. Alle per-frame-skriv er transform/opacity.
    const pointer = { x: 0, y: 0, seen: false };
    const center = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    const damping = 2 * ZETA * Math.sqrt(STIFFNESS);
    let rectDirty = true;
    let lastPointer = 0;
    let lastFrame = 0;
    let raf = 0;
    let visible = true;
    let running = false;

    const onMove = (e: PointerEvent) => {
      lastPointer = performance.now();
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.seen = true;
    };
    const markDirty = () => {
      rectDirty = true;
    };

    const tick = (now: number) => {
      if (!visible) {
        running = false;
        return;
      }
      const dt = Math.min((now - lastFrame) / 1000, 0.032);
      lastFrame = now;

      if (rectDirty) {
        const rect = wrapper.getBoundingClientRect();
        center.x = rect.left + rect.width / 2;
        center.y = rect.top + rect.height / 2;
        rectDirty = false;
      }

      if (!pointer.seen || now - lastPointer > IDLE_AFTER_MS) {
        // Rolig "se seg rundt" når musen står stille
        target.x = Math.sin(now / 1900) * 0.38;
        target.y = Math.cos(now / 2600) * 0.28;
      } else {
        target.x = clamp((pointer.x - center.x) / (window.innerWidth / 2), -1, 1);
        target.y = clamp((pointer.y - center.y) / (window.innerHeight / 2), -1, 1);
      }

      // Fjær mot målet, per akse
      vel.x += (STIFFNESS * (target.x - pos.x) - damping * vel.x) * dt;
      vel.y += (STIFFNESS * (target.y - pos.y) - damping * vel.y) * dt;
      pos.x += vel.x * dt;
      pos.y += vel.y * dt;

      const ry = pos.x * MAX_RY;
      const rx = -pos.y * MAX_RX;
      const rz = -pos.x * MAX_RZ;
      const bob = Math.sin(now / 1600) * BOB_AMPLITUDE;

      // Parallakse-lag: kabinettet lener seg mest, innholdet bak glasset
      // henger litt etter, gjenskinnet glir motsatt (glassflate), og
      // gulvskyggen ligger flatt igjen på gulvet og siger motsatt vei.
      rig.style.transform = `translate3d(0, ${bob.toFixed(2)}px, 0) rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg) rotateZ(${rz.toFixed(3)}deg)`;
      content.style.transform = `translate(${(-pos.x * 8).toFixed(2)}px, ${(-pos.y * 5).toFixed(2)}px)`;
      glare.style.transform = `translate(${(-pos.x * 24).toFixed(2)}px, ${(-pos.y * 14).toFixed(2)}px)`;
      shadow.style.transform = `translate3d(${(-pos.x * 16).toFixed(2)}px, 0, 0) scaleX(${(1 - Math.abs(pos.x) * 0.08 + bob * 0.008).toFixed(4)})`;

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running && !mql.matches) {
        running = true;
        lastFrame = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    // Reagerer på at brukeren skrur reduced motion av/på mens siden er åpen
    const onMotionChange = () => {
      if (mql.matches) {
        cancelAnimationFrame(raf);
        running = false;
        pos.x = pos.y = vel.x = vel.y = 0;
        rig.style.transform = "";
        shadow.style.transform = "";
        glare.style.transform = "";
        content.style.transform = "";
      } else {
        rectDirty = true;
        start();
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        rectDirty = true;
        start();
      }
    });
    io.observe(wrapper);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", markDirty, { passive: true });
    window.addEventListener("resize", markDirty);
    mql.addEventListener("change", onMotionChange);
    start();

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", markDirty);
      window.removeEventListener("resize", markDirty);
      mql.removeEventListener("change", onMotionChange);
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrapperRef} aria-hidden className="crt-scene">
      {/* Varmt omgivelseslys fra skjermen, puster sakte */}
      <div className="crt-glow" />

      {/* Gulvskygge i eget flatt lag: roterer ikke med kabinettet */}
      <svg ref={shadowRef} className="crt-shadow" viewBox="0 0 460 360" fill="none">
        <defs>
          <radialGradient id="cmShadowTight" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#141413" stopOpacity="0.26" />
            <stop offset="1" stopColor="#141413" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cmShadowWide" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#141413" stopOpacity="0.1" />
            <stop offset="1" stopColor="#141413" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="230" cy="344" rx="180" ry="13" fill="url(#cmShadowWide)" />
        <ellipse cx="230" cy="343" rx="95" ry="8" fill="url(#cmShadowTight)" />
      </svg>

      <div ref={rigRef} className="crt-rig">
        <svg viewBox="0 0 460 360" fill="none">
          <defs>
            <linearGradient id="cmAlu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f1ebdf" />
              <stop offset="0.5" stopColor="#e0d8c8" />
              <stop offset="1" stopColor="#c8bfaa" />
            </linearGradient>
            <linearGradient id="cmAluStand" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#cbc2ae" />
              <stop offset="0.5" stopColor="#e8e1d2" />
              <stop offset="1" stopColor="#c2b8a2" />
            </linearGradient>
            <linearGradient id="cmAluFoot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ece5d7" />
              <stop offset="1" stopColor="#b7ad96" />
            </linearGradient>
            <linearGradient id="cmScreen" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0" stopColor="#dd8058" />
              <stop offset="0.55" stopColor="#d97757" />
              <stop offset="1" stopColor="#c4633f" />
            </linearGradient>
            <radialGradient id="cmVignette" cx="0.5" cy="0.42" r="0.75">
              <stop offset="0.6" stopColor="#141413" stopOpacity="0" />
              <stop offset="1" stopColor="#141413" stopOpacity="0.14" />
            </radialGradient>
            <linearGradient id="cmGlare" x1="0" y1="0" x2="0.6" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
              <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.03" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <pattern id="cmScan" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="1.25" fill="#141413" opacity="0.05" />
            </pattern>
            <filter id="cmBloom" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <clipPath id="cmScreenClip">
              <rect x="34" y="28" width="392" height="244" rx="5" />
            </clipPath>
          </defs>

          {/* Stativ */}
          <rect x="210" y="284" width="40" height="46" fill="url(#cmAluStand)" />
          {/* AO fra kabinettet ned på søylen */}
          <rect x="210" y="284" width="40" height="10" fill="#141413" opacity="0.12" />
          <rect x="158" y="326" width="144" height="14" rx="7" fill="url(#cmAluFoot)" />
          <rect x="158" y="326" width="144" height="14" rx="7" stroke="#a89d85" strokeWidth="0.75" />

          {/* Kabinett */}
          <rect x="20" y="14" width="420" height="272" rx="14" fill="url(#cmAlu)" />
          <rect x="20" y="14" width="420" height="272" rx="14" stroke="#b3a88f" strokeWidth="1" />
          {/* Bezel */}
          <rect x="28" y="22" width="404" height="256" rx="8" fill="#141413" />
          {/* Kamera-prikk */}
          <circle cx="230" cy="25" r="1.3" fill="#2e2e2b" />

          {/* Skjermflate */}
          <rect x="34" y="28" width="392" height="244" rx="5" fill="url(#cmScreen)" />

          <g clipPath="url(#cmScreenClip)">
            {/* Skjerminnhold: eget parallakse-lag bak glasset */}
            <g ref={contentRef} className="crt-content">
              {/* Bloom bak navnet: mykt CRT-lys */}
              <text
                x="230"
                y="172"
                fontSize="76"
                letterSpacing="-1.5"
                textAnchor="middle"
                fill="#ffe9de"
                opacity="0.32"
                filter="url(#cmBloom)"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Claude
              </text>
              <text
                x="230"
                y="172"
                fontSize="76"
                letterSpacing="-1.5"
                textAnchor="middle"
                fill="#faf9f5"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Claude
              </text>
              {/* Markør: skjermen venter på neste prompt */}
              <rect className="crt-caret" x="356" y="120" width="5" height="54" fill="#faf9f5" />
            </g>

            {/* Scanlines: lav kontrast, 4px periode */}
            <rect x="34" y="28" width="392" height="244" fill="url(#cmScan)" />

            {/* Vignett + gjenskinn */}
            <rect x="34" y="28" width="392" height="244" fill="url(#cmVignette)" />
            <g ref={glareRef} className="crt-glare">
              <rect x="34" y="28" width="392" height="244" rx="5" fill="url(#cmGlare)" />
            </g>
          </g>

          {/* Innvendig topplys på glasset */}
          <rect x="34" y="28" width="392" height="1.5" fill="#faf9f5" opacity="0.1" />
        </svg>
      </div>
    </div>
  );
}
