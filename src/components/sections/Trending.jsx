import { useMemo } from "react";
import Container from "../layout/Container";
import { trendingContent } from "../data/home";
import { img } from "../../utils/assets";

// ✅ View All arrow icon (adjust extension if needed)
import arrowIcon from "../../assets/icons/arrowicon.png";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function StarRow({ rating = 0 }) {
  const full = Math.floor(rating);

  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          className={i < full ? "text-brand" : "text-white/25"}
          fill="currentColor"
        >
          <path d="M12 17.3l-6.2 3.7 1.7-7.1L2 9.2l7.3-.6L12 2l2.7 6.6 7.3.6-5.5 4.7 1.7 7.1z" />
        </svg>
      ))}
      <span className="ml-2 text-xs text-white/55">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function Trending() {
  const games = useMemo(() => trendingContent.games ?? [], []);

  return (
    <section id="trending" className="relative">
      <Container className="pt-8 pb-12 mt-6 lg:pb-8">
        {/* Header */}
        <div className="flex items-center gap-6">
          <h2 className="text-lg font-semibold text-white">
            {trendingContent.title}
          </h2>

          {/* ✅ View All with custom icon */}
          <button className="flex items-center gap-2 text-sm text-brand hover:opacity-90 transition">
            <span>{trendingContent.viewAll}</span>
            <img src={arrowIcon} alt="" className="h-4 w-4" />
          </button>
        </div>

        {/* No outer wrapper (as per figma) */}
        <div className="relative mt-5">
          {/* Left Arrow (no box) */}
          <button
            type="button"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 px-2 py-2 text-3xl text-white/60 hover:text-white transition"
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Right Arrow (no box) */}
          <button
            type="button"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 px-2 py-2 text-3xl text-white/60 hover:text-white transition"
            aria-label="Next"
          >
            ›
          </button>

          <div className="lg:px-10">
            {/* GRID – 5 cards visible */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {games.map((g) => {
                const poster = safeImg(g.image);

                return (
                  <article
                    key={g.title}
                    className="rounded-2xl bg-black/25 ring-1 ring-white/10 overflow-hidden"
                  >
                    {/* Image */}
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

                      {g.badge && (
                        <span className="absolute left-3 top-3 rounded-lg bg-brand px-2 py-1 text-[10px] font-semibold text-black">
                          {g.badge}%
                        </span>
                      )}
                    </div>

                    {/* Content */}
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

                      {/* ✅ Buttons updated to match figma (same size + orange border on Add) */}
                      <div className="mt-3 flex gap-2">
                        <button
                          className="flex-1 h-10 rounded-xl border border-brand bg-black/20 text-xs font-semibold text-white/80 hover:bg-black/30 transition"
                        >
                          Add to Cart
                        </button>

                        <button
                          className="flex-1 h-10 rounded-xl bg-brand text-xs font-semibold text-black hover:opacity-90 transition"
                        >
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom dots (visual only) */}
            <div className="mt-5 flex justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
