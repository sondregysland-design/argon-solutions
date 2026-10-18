import { ImageResponse } from "next/og";
import { getAllPosts, getAllSlugs } from "@/lib/blog";

// Delingsbilde per bloggpost (LinkedIn, Slack, X). Next legger det inn som
// både og:image og twitter:image, så page.tsx trenger ikke images-feltet.
export const alt = "Argon Solutions blogg";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  const title = post?.title ?? "Argon Solutions";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#F4F6FA",
          color: "#121317",
          borderTop: "16px solid #B4400C",
        }}
      >
        <div style={{ fontSize: 30, color: "#B4400C", fontWeight: 600 }}>
          Argon Solutions · Blogg
        </div>
        <div
          style={{
            fontSize: title.length > 70 ? 56 : 68,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div style={{ fontSize: 28, color: "#45474D" }}>
          argonsolutions.no · AI-byrå i Stavanger
        </div>
      </div>
    ),
    size
  );
}
