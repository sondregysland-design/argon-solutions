import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Det åpne dagskurset for private er lagt ned. Alle URL-ene som solgte det
    // peker nå på bedriftskurset, slik at indekserte lenker ikke dør.
    return [
      { source: "/kurs/bedrift", destination: "/kurs", permanent: true },
      { source: "/kurs/v2", destination: "/kurs", permanent: true },
      { source: "/kurs/claude-kurs-stavanger", destination: "/kurs", permanent: true },
      { source: "/kurs/vibe-coding-kurs-stavanger", destination: "/kurs", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
