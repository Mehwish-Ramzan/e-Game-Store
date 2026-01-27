import { useMemo, useRef } from "react";
import Container from "../layout/Container";
import { trendingContent } from "../data/home";
import { img } from "../../utils/assets";

// small helper: if img() throws or returns undefined, UI still works
function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function StarRow({ rating = 0 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < full || (i === full && half);
        return (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className={filled ? "text-brand" : "text-white/25"}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
          </svg>
        );
      })}
      <span className="ml-2 text-xs text-white/55">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Trending() {
  const trackRef = useRef(null);

  const games = useMemo(() => trendingContent.games ?? [], []);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;

    // scroll about one card width
    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="trending" className="relative">
      <Container className="pt-8 pb-10 lg:pt-10 lg:pb-12">
        {/* header */}
        <div className="flex items-center justify-start gap-6">
          <h2 className="text-base sm:text-lg font-semibold text-white">
            {trendingContent.title}
          </h2>

          <button className="text-xs sm:text-sm text-brand hover:opacity-90 transition">
            {trendingContent.viewAll} <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* slider wrapper */}
        <div className="relative mt-5 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4 sm:p-5 shadow-soft">
          {/* arrows (desktop) */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 hover:bg-black/55 transition"
            aria-label="Scroll left"
          >
            <span className="text-white/80 text-xl">‹</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 hover:bg-black/55 transition"
            aria-label="Scroll right"
          >
            <span className="text-white/80 text-xl">›</span>
          </button>

          {/* cards row */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2
                       [scrollbar-width:none] [-ms-overflow-style:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {games.map((g) => {
              const poster = safeImg(g.image);

              return (
                <article
                  key={g.title}
                  data-card
                  className="snap-start min-w-[220px] sm:min-w-[240px] lg:min-w-[250px]"
                >
                  <div className="rounded-2xl bg-black/25 ring-1 ring-white/10 overflow-hidden">
                    {/* image */}
                    <div className="relative">
                      {poster ? (
                        <img
                          src={poster}
                          alt={g.title}
                          className="h-[170px] w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-[170px] w-full bg-white/10" />
                      )}

                      {/* badge (top-left) */}
                      {g.badge ? (
                        <div className="absolute left-3 top-3 rounded-lg bg-brand px-2 py-1 text-[10px] font-semibold text-black">
                          {g.badge}%
                        </div>
                      ) : null}
                    </div>

                    {/* content */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {g.title}
                      </h3>

                      <div className="mt-2 flex items-center justify-between">
                        <StarRow rating={g.rating} />
                        <span className="text-sm font-semibold text-white">
                          {g.price}
                        </span>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button className="btn-outline flex-1 py-2 text-xs">
                          Add to Cart
                        </button>
                        <button className="btn-primary flex-1 py-2 text-xs">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* dots (simple visual like figma) */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
        </div>
      </Container>
    </section>
  );
}
