import React from "react";
import { footerContent } from "../data/home";

const Icon = ({ name }) => {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
  };

  // Simple clean icons (no extra deps)
  if (name === "facebook")
    return (
      <svg {...common}>
        <path
          d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v3H8v3h3v6h3v-6h3l1-3h-4v-3c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "instagram")
    return (
      <svg {...common}>
        <path
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"
          fill="currentColor"
        />
        <path
          d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
          fill="currentColor"
        />
        <path d="M17.6 6.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" fill="currentColor" />
      </svg>
    );

  if (name === "x")
    return (
      <svg {...common}>
        <path
          d="M18.8 3H21l-6.9 7.9L22 21h-6.2l-4.9-6.2L5.4 21H3l7.4-8.5L2 3h6.3l4.4 5.6L18.8 3Zm-1.1 16h1.2L6.2 5H4.9l12.8 14Z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "youtube")
    return (
      <svg {...common}>
        <path
          d="M21.8 8.2a3 3 0 0 0-2.1-2.1C17.9 5.6 12 5.6 12 5.6s-5.9 0-7.7.5A3 3 0 0 0 2.2 8.2 31.7 31.7 0 0 0 2 12s.1 2.6.2 3.8a3 3 0 0 0 2.1 2.1c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a3 3 0 0 0 2.1-2.1c.1-1.2.2-3.8.2-3.8s0-2.6-.2-3.8ZM10 15.2V8.8L15.6 12 10 15.2Z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "pin")
    return (
      <svg {...common}>
        <path
          d="M12 22s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12Zm0-9.5A2.5 2.5 0 1 0 12 7a2.5 2.5 0 0 0 0 5.5Z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "phone")
    return (
      <svg {...common}>
        <path
          d="M6.6 10.7c1.5 3 3.7 5.2 6.7 6.7l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1l-2.1 2.2Z"
          fill="currentColor"
        />
      </svg>
    );

  if (name === "mail")
    return (
      <svg {...common}>
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
          fill="currentColor"
        />
      </svg>
    );

  return null;
};

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        marginTop: 60,
        padding: "52px 0 18px",
        background:
          "radial-gradient(1200px 480px at 20% 30%, rgba(255,122,0,0.10), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(10,12,24,0.35), rgba(10,12,24,0.85))",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr",
            gap: 18,
            alignItems: "start",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Orange gamepad-ish mark */}
              <div
                style={{
                  width: 34,
                  height: 26,
                  borderRadius: 8,
                  background: "#FF7A00",
                  display: "grid",
                  placeItems: "center",
                  boxShadow: "0 12px 24px rgba(255,122,0,0.18)",
                }}
              >
                <span style={{ color: "#111", fontWeight: 900, fontSize: 14 }}>🎮</span>
              </div>

              <div style={{ whiteSpace: "pre-line", color: "#EDEDED", fontWeight: 800, lineHeight: 1.05 }}>
                {footerContent.brand.name}
              </div>
            </div>

            <p
              style={{
                marginTop: 14,
                marginBottom: 16,
                color: "rgba(255,255,255,0.55)",
                fontSize: 12,
                lineHeight: 1.6,
                maxWidth: 330,
              }}
            >
              {footerContent.brand.desc}
            </p>

            {/* Social */}
            <div style={{ display: "flex", gap: 14, color: "rgba(255,255,255,0.75)" }}>
              {footerContent.social.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name={s.id} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerContent.columns.map((col) => (
            <div key={col.title}>
              <h4 style={{ margin: 0, color: "#FF7A00", fontSize: 13, fontWeight: 700 }}>
                {col.title}
              </h4>
              <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
                {col.links.map((l) => (
                  <a
                    key={l}
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.60)",
                      fontSize: 12,
                      textDecoration: "none",
                    }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ margin: 0, color: "#FF7A00", fontSize: 13, fontWeight: 700 }}>
              {footerContent.contact.title}
            </h4>

            <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
              {footerContent.contact.items.map((it, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    color: "rgba(255,255,255,0.60)",
                    fontSize: 12,
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>
                    <Icon name={it.type} />
                  </span>
                  <span>{it.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div
          style={{
            marginTop: 18,
            paddingTop: 14,
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.40)",
            fontSize: 11,
            textAlign: "center",
          }}
        >
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
