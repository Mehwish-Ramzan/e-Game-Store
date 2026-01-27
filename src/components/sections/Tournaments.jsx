import { useId, useRef } from "react";
import Container from "../layout/Container";
import { tournamentsContent } from "../data/home";
import { img } from "../../utils/assets";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function NotchBattleCardSVG({ idBase, battleBg }) {
  // ViewBox: 1000 x 340
  // Notch: top dip + bottom dip (center)
  const d =
    "M 70 28 " +
    "H 380 " +
    "L 430 74 " +
    "H 570 " +
    "L 620 28 " +
    "H 930 " +
    "Q 972 28 972 70 " +
    "V 270 " +
    "Q 972 312 930 312 " +
    "H 620 " +
    "L 570 266 " +
    "H 430 " +
    "L 380 312 " +
    "H 70 " +
    "Q 28 312 28 270 " +
    "V 70 " +
    "Q 28 28 70 28 " +
    "Z";

  const patternId = `${idBase}-img`;
  const glowId = `${idBase}-glow`;
  const fillGradId = `${idBase}-fillgrad`;
  const shadeGradId = `${idBase}-shade`;

  return (
    <svg
      className="absolute inset-0 h-full w-full pointer-events-none"
      viewBox="0 0 1000 340"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Optional image fill */}
        {battleBg ? (
          <pattern
            id={patternId}
            patternUnits="userSpaceOnUse"
            width="1000"
            height="340"
          >
            <image
              href={battleBg}
              width="1000"
              height="340"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        ) : null}

        {/* Base fill gradient (fallback / blend) */}
        <linearGradient id={fillGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(0,0,0,0.70)" />
          <stop offset="0.55" stopColor="rgba(0,0,0,0.40)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.75)" />
        </linearGradient>

        {/* Dark shading overlay */}
        <linearGradient id={shadeGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(0,0,0,0.75)" />
          <stop offset="0.5" stopColor="rgba(0,0,0,0.25)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.75)" />
        </linearGradient>

        {/* Glow filter for border */}
        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Shape fill */}
      <path
        d={d}
        fill={battleBg ? `url(#${patternId})` : `url(#${fillGradId})`}
        opacity={battleBg ? 0.85 : 1}
      />

      {/* Shade overlay to match Figma readability */}
      <path d={d} fill={`url(#${shadeGradId})`} opacity="1" />

      {/* Glow stroke (soft) */}
      <path
        d={d}
        fill="none"
        stroke="rgba(255,123,0,0.45)"
        strokeWidth="10"
        filter={`url(#${glowId})`}
      />

      {/* Main thin stroke (crisp) */}
      <path
        d={d}
        fill="none"
        stroke="rgb(var(--color-brand))"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function Tournaments() {
  const rowRef = useRef(null);
  const reactId = useId();
  const idBase = `battle-${String(reactId).replace(/[:]/g, "")}`;

  const sectionBg = safeImg(tournamentsContent.bgImage); // ✅ tournaments section bg
  const battleBg = safeImg(tournamentsContent.battleCard?.bgImage);
  const leftChar = safeImg(tournamentsContent.battleCard?.leftChar);
  const rightChar = safeImg(tournamentsContent.battleCard?.rightChar);
  const buyArrow = safeImg(tournamentsContent.arrow);

  const scrollRow = (dir = 1) => {
    const el = rowRef.current;
    if (!el) return;

    const card = el.querySelector("[data-smallcard]");
    const step = card ? card.getBoundingClientRect().width + 16 : 260;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="tournaments" className="relative overflow-hidden">
      {/* ✅ SECTION BG IMAGE (Figma feel) */}
      <div className="absolute inset-0 -z-10">
        {sectionBg ? (
          <img
            src={sectionBg}
            alt=""
            className="h-full w-full object-cover object-center opacity-70"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_380px_at_50%_0%,rgba(255,123,0,0.08),transparent_60%)]" />
      </div>

      <Container className="pt-10 pb-12 lg:pt-12 lg:pb-14">
        {/* ✅ NO OUTER WRAPPER BOX (removed) */}

        {/* title */}
        <div className="text-center">
          <div className="mx-auto mb-2 h-2 w-2 rounded-full bg-brand" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            <span className="text-brand">{tournamentsContent.titleAccent}</span>{" "}
            {tournamentsContent.titleRest}
          </h2>
        </div>

        {/* top mini-cards row */}
        <div className="relative mt-6">
          {/* arrows */}
          <button
            type="button"
            onClick={() => scrollRow(-1)}
            className="hidden sm:flex absolute -left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-xl bg-black/35 ring-1 ring-white/10 hover:bg-black/55 transition items-center justify-center"
            aria-label="Scroll left"
          >
            <span className="text-white/80 text-xl">‹</span>
          </button>

          <button
            type="button"
            onClick={() => scrollRow(1)}
            className="hidden sm:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-xl bg-black/35 ring-1 ring-white/10 hover:bg-black/55 transition items-center justify-center"
            aria-label="Scroll right"
          >
            <span className="text-white/80 text-xl">›</span>
          </button>

          <div
            ref={rowRef}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2
                       [scrollbar-width:none] [-ms-overflow-style:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {(tournamentsContent.games ?? []).map((g) => {
              const poster = safeImg(g.image);

              return (
                <div
                  key={g.title}
                  data-smallcard
                  className="snap-start min-w-[150px] sm:min-w-[160px] lg:min-w-[170px]"
                >
                  <div className="rounded-2xl overflow-hidden bg-black/25 ring-1 ring-white/10">
                    {poster ? (
                      <img
                        src={poster}
                        alt={g.title}
                        className="h-[160px] w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[160px] w-full bg-white/10" />
                    )}

                    <div className="px-3 py-2 flex justify-start flex-col gap-3">
                      <p className="text-xs text-white/85 truncate">
                        {g.title}
                      </p>

                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white transition"
                      >
                        <span>Buy Now</span>

                        {buyArrow ? (
                          <img
                            src={buyArrow}
                            alt=""
                            className="h-3 w-3 opacity-90"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-brand text-lg leading-none">
                            ›
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ✅ Battle card (NOTCH border + no cutting) */}
        <div className="mt-7 relative overflow-visible">
          <div className="relative w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]">
            {/* notch shape bg + border */}
            <NotchBattleCardSVG idBase={idBase} battleBg={battleBg} />

            {/* content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 sm:px-10 lg:px-12">
                <div className="grid gap-6 md:grid-cols-[1fr_1.3fr_1fr] md:items-center">
                  {/* left character */}
                  <div className="hidden md:block">
                    {leftChar ? (
                      <img
                        src={leftChar}
                        alt=""
                        className="h-[220px] lg:h-[260px] w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[220px] w-full rounded-2xl bg-white/5" />
                    )}
                  </div>

                  {/* center text */}
                  <div className="text-center">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {tournamentsContent.battleCard?.title}{" "}
                      <span className="text-brand">
                        {tournamentsContent.battleCard?.titleHighlight}
                      </span>
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-white/65 max-w-md mx-auto">
                      {tournamentsContent.battleCard?.desc}
                    </p>

                    <div className="mt-4">
                      <button className="btn-primary">
                        {tournamentsContent.battleCard?.cta}
                      </button>
                    </div>
                  </div>

                  {/* right character */}
                  <div className="hidden md:block">
                    {rightChar ? (
                      <img
                        src={rightChar}
                        alt=""
                        className="h-[220px] lg:h-[260px] w-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[220px] w-full rounded-2xl bg-white/5" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* subtle outer shadow like figma */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-40 bg-black" />
        </div>
      </Container>
    </section>
  );
}
