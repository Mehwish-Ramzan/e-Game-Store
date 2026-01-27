import { useMemo, useRef } from "react";
import Container from "../layout/Container";
import { img } from "../../utils/assets";
import { bestsellersContent } from "../data/home"; // optional (fallback included)

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
      <span className="ml-2 text-xs text-white/55">{Number(rating).toFixed(1)}</span>
    </div>
  );
}

export default function Bestsellers() {
  const trackRef = useRef(null);

  const content = bestsellersContent ?? {
    title: "Bestsellers",
    viewAll: "View All",
    dots: 5,
    games: [
      { title: "Fortnite", image: "bestseller-1.png", rating: 4.8, price: "81.10", badge: 15 },
      { title: "Minecraft", image: "bestseller-2.png", rating: 4.7, price: "81.10", badge: 15 },
      { title: "Counter Strike 2", image: "bestseller-3.png", rating: 4.6, price: "81.10", badge: 15 },
      { title: "Spider-Man 2", image: "bestseller-4.png", rating: 4.9, price: "81.10", badge: 15 },
      { title: "The Witcher 3", image: "bestseller-5.png", rating: 4.8, price: "81.10", badge: 15 },
    ],
  };

  const games = useMemo(() => content.games ?? [], [content.games]);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector("[data-card]");
    const step = card ? card.getBoundingClientRect().width + 16 : 340;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const dotsCount = Math.max(1, Number(content.dots ?? 5));

  return (
    <section id="bestsellers" className="relative">
      <Container className="pt-8 pb-6 lg:pt-10 lg:pb-8">
        {/* header */}
        <div className="flex items-center justify-start gap-6">
          <h2 className="text-base sm:text-lg font-semibold text-white">{content.title}</h2>

          <button className="text-xs sm:text-sm text-brand hover:opacity-90 transition">
            {content.viewAll} <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* row (NO outer box) */}
        <div className="relative mt-5">
          {/* arrows */}
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="hidden lg:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-xl bg-black/35 ring-1 ring-white/10 hover:bg-black/55 transition"
            aria-label="Scroll left"
          >
            <span className="text-white/80 text-xl">‹</span>
          </button>

          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-xl bg-black/35 ring-1 ring-white/10 hover:bg-black/55 transition"
            aria-label="Scroll right"
          >
            <span className="text-white/80 text-xl">›</span>
          </button>

          {/* cards */}
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
                  className="snap-start min-w-[220px] sm:min-w-[235px] lg:min-w-[240px]"
                >
                  <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 overflow-hidden">
                    {/* image */}
                    <div className="relative">
                      {poster ? (
                        <img
                          src={poster}
                          alt={g.title}
                          className="h-[175px] w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-[175px] w-full bg-white/10" />
                      )}

                      {/* badge */}
                      {g.badge ? (
                        <div className="absolute left-3 top-3 rounded-lg bg-brand px-2 py-1 text-[10px] font-semibold text-black">
                          {g.badge}%
                        </div>
                      ) : null}
                    </div>

                    {/* content */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-white truncate">{g.title}</h3>

                      <div className="mt-2 flex items-center justify-between">
                        <StarRow rating={g.rating ?? 0} />
                        <span className="text-sm font-semibold text-white">{g.price}</span>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button className="btn-outline flex-1 py-2 text-xs">Add to Cart</button>
                        <button className="btn-primary flex-1 py-2 text-xs">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: dotsCount }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${i === 0 ? "bg-brand" : "bg-white/20"}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
