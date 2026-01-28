import { useMemo } from "react";
import Container from "../layout/Container";
import { img } from "../../utils/assets";
import { bestsellersContent } from "../data/home";
import arrowIcon from "../../assets/icons/arrowicon.png";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function GamepadIcon({ className = "" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8.5 13.5h-2m1-1v2M15.8 12.9h.01M17.7 14.1h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.2 9.2c1.2-1 2.9-1.7 4.8-1.7s3.6.7 4.8 1.7c.8.6 1.7 1.7 2.1 3.4l.7 3.1a2.5 2.5 0 0 1-2.4 3.1h-.4c-1.2 0-2.2-.8-2.5-1.9l-.2-.7a1 1 0 0 0-1-.7h-2a1 1 0 0 0-1 .7l-.2.7a2.6 2.6 0 0 1-2.5 1.9h-.4a2.5 2.5 0 0 1-2.4-3.1l.7-3.1c.4-1.7 1.3-2.8 2.1-3.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ rating = 4 }) {
  const full = Math.max(0, Math.min(5, Math.floor(Number(rating) || 0)));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        return (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className={filled ? "text-brand" : "text-brand/45"}
            aria-hidden="true"
          >
            {filled ? (
              <path
                fill="currentColor"
                d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z"
              />
            ) : (
              <path
                d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

export default function Bestsellers() {
  const content =
    bestsellersContent ?? {
      title: "Bestsellers",
      viewAll: "View All",
      dots: 5,
      games: [],
    };

  const games = useMemo(() => (content.games ?? []).slice(0, 5), [content.games]);
  const dotsCount = Math.max(1, Number(content.dots ?? 5));

  return (
    <section id="bestsellers" className="relative">
      <Container className="pt-8 pb-10 lg:pt-10 lg:pb-12">
        {/* header */}
        <div className="flex items-center justify-start gap-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white">
            {content.title}
          </h2>

          <button className="inline-flex items-center gap-2 text-sm text-brand hover:opacity-90 transition">
            {content.viewAll}
            <img src={arrowIcon} alt="" className="h-4 w-4" />
          </button>
        </div>

        {/* cards + arrows */}
        <div className="relative mt-6">
          {/* ✅ arrows (perfect, non-overlapping) */}
          <button
            type="button"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-xl
                       bg-white/[0.04] ring-1 ring-white/15
                       hover:bg-white/[0.07] transition"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="text-white/80 text-2xl leading-none">‹</span>
          </button>

          <button
            type="button"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                       h-10 w-10 items-center justify-center rounded-xl
                       bg-white/[0.04] ring-1 ring-brand/45
                       hover:bg-white/[0.07] transition"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="text-brand text-2xl leading-none">›</span>
          </button>

          {/* ✅ NO SCROLL — grid layout like figma */}
          <div className="px-2 lg:px-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[14px]">
              {games.map((g) => {
                const poster = safeImg(g.image);

                return (
                  <article key={g.title} className="w-full">
                    <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/25 shadow-soft p-3">
                      {/* poster */}
                      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/25 bg-black/20">
                        {poster ? (
                          <img
                            src={poster}
                            alt={g.title}
                            className="w-full aspect-square object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full aspect-square bg-white/10" />
                        )}

                        {/* badge */}
                        {g.badge ? (
                          <div className="absolute left-3 top-3 rounded-lg bg-[#ff4d4d] px-2 py-1 text-[11px] font-semibold text-white">
                            {g.badge}
                          </div>
                        ) : null}
                      </div>

                      {/* content */}
                      <div className="mt-3">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-semibold text-white truncate">
                            {g.title}
                          </h3>
                          <Stars rating={g.rating ?? 4} />
                        </div>

                        <div className="mt-2 flex items-end justify-between">
                          <div className="flex items-baseline gap-2">
                            <span className="text-xs text-white/35 line-through">
                              {g.oldPrice ?? "60$"}
                            </span>
                            <span className="text-base font-semibold text-white">
                              {g.price ?? "51$"}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-xs">
                            <GamepadIcon className="text-white/65" />
                            <span className="text-brand font-semibold">
                              {g.score ?? 81}
                            </span>
                            <span className="text-white/45">/100</span>
                          </div>
                        </div>

                        <div className="mt-3 flex gap-3">
                          <button className="flex-1 rounded-xl border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 transition">
                            Add to Cart
                          </button>
                          <button className="flex-1 rounded-xl bg-brand py-2.5 text-sm font-medium text-black hover:brightness-110 transition">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-3">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === 0 ? "bg-brand" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
