import React from "react";
import { blogContent } from "../data/home.js";
import arrowIcon from "../../assets/icons/arrowicon.png";

const Arrow = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Vite-friendly image resolver (works with your folder: src/assests/images)
const imgUrl = (fileName) => new URL(`../../assets/images/${fileName}`, import.meta.url).href;

export default function Blog() {
  const featured = blogContent.posts.find((p) => p.featured) || blogContent.posts[0];
  const rest = blogContent.posts.filter((p) => p.id !== featured.id).slice(0, 4);

  return (
    <section id="blog" style={{ width: "100%", padding: "10px 0" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 30,
            paddingRight: 20,
            marginBottom: 16,
          }}
        >
          <h2 style={{ margin: 0, color: "#EDEDED", fontSize: 18, fontWeight: 600 }}>
            {blogContent.title}
          </h2>

          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#FF7A00",
              textDecoration: "none",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {blogContent.viewAll} <img src={arrowIcon} alt="" className="h-4 w-4" />
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 14,
          }}
        >
          {/* Featured */}
          <BlogCard item={featured} img={imgUrl(featured.image)} featured />

          {/* 4 Small */}
          {rest.map((item) => (
            <BlogCard key={item.id} item={item} img={imgUrl(item.image)} />
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            marginTop: 14,
          }}
        >
          {Array.from({ length: blogContent.dots }).map((_, i) => (
            <span
              key={i}
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: i === 0 ? "#FF7A00" : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ item, img, featured = false }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        gridColumn: featured ? "span 2" : "span 1",
        gridRow: featured ? "span 2" : "span 1",
        minHeight: featured ? 210 : 98,
      }}
    >
      <img
        src={img}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: featured ? "14px 14px 12px" : "10px 12px 10px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80), rgba(0,0,0,0.10), rgba(0,0,0,0))",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#F4F4F4",
            fontSize: featured ? 13 : 11,
            fontWeight: 600,
            lineHeight: 1.25,
            maxWidth: "95%",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}
