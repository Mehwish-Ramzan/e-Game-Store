import { useId } from "react";
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

        <linearGradient id={fillGradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(0,0,0,0.70)" />
          <stop offset="0.55" stopColor="rgba(0,0,0,0.40)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.75)" />
        </linearGradient>

        <linearGradient id={shadeGradId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(0,0,0,0.75)" />
          <stop offset="0.5" stopColor="rgba(0,0,0,0.25)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.75)" />
        </linearGradient>

        <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d={d}
        fill={battleBg ? `url(#${patternId})` : `url(#${fillGradId})`}
        opacity={battleBg ? 0.85 : 1}
      />

      <path d={d} fill={`url(#${shadeGradId})`} opacity="1" />

      <path
        d={d}
        fill="none"
        stroke="rgba(255,123,0,0.45)"
        strokeWidth="10"
        filter={`url(#${glowId})`}
      />

      <path d={d} fill="none" stroke="rgb(var(--color-brand))" strokeWidth="3" />
    </svg>
  );
}

export default function Tournaments() {
  const reactId = useId();
  const idBase = `battle-${String(reactId).replace(/[:]/g, "")}`;

  const sectionBg = safeImg(tournamentsContent.bgImage);
  const battleBg = safeImg(tournamentsContent.battleCard?.bgImage);
  const leftChar = safeImg(tournamentsContent.battleCard?.leftChar);
  const rightChar = safeImg(tournamentsContent.battleCard?.rightChar);
  const buyArrow = safeImg(tournamentsContent.arrow);

  const games = (tournamentsContent.games ?? []).slice(0, 6);

  return (
    <section id="tournaments" className="relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 -z-10 mt-7">
        {sectionBg ? (
          <img
            src={sectionBg}
            alt=""
            className="h-full w-full object-cover object-center opacity-70"
            loading="lazy"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b " />
        <div className="absolute inset-0 bg-[radial-gradient(900px_380px_at_50%_0%,rgba(255,123,0,0.08),transparent_60%)]" />
      </div>

      <Container className="pt-10 pb-12 lg:pt-12 lg:pb-14">
        {/* ✅ Title (orange dot removed) */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            <span className="text-brand">{tournamentsContent.titleAccent}</span>{" "}
            {tournamentsContent.titleRest}
          </h2>
        </div>

        {/* ✅ Cards row + arrows (no overlap like figma) */}
        <div className="relative mt-6">
          {/* Arrows */}
          <button
            type="button"
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-xl bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07] transition items-center justify-center"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="text-white/80 text-2xl leading-none">‹</span>
          </button>

          <button
            type="button"
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-xl bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07] transition items-center justify-center"
            aria-hidden="true"
            tabIndex={-1}
          >
            <span className="text-white/80 text-2xl leading-none">›</span>
          </button>

          {/* ✅ grid gets side padding on lg so arrows never sit on cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 px-2 lg:px-16">
            {games.map((g) => {
              const poster = safeImg(g.image);

              return (
                <article
                  key={g.title}
                  className="rounded-2xl overflow-hidden ring-1 ring-white/10"
                >
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
                    <p className="text-xs text-white/85 truncate">{g.title}</p>

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
                        <span className="text-brand text-lg leading-none">›</span>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ✅ Battle card (narrower width + characters bigger + overflow like figma) */}
        <div className="mt-7 relative overflow-visible">
          {/* ✅ width reduced + centered */}
          <div className="relative mx-auto w-full max-w-[1120px] min-h-[220px] sm:min-h-[250px] lg:min-h-[280px]">
            <NotchBattleCardSVG idBase={idBase} battleBg={battleBg} />

            {/* content overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-6 sm:px-10 lg:px-12">
                <div className="grid gap-6 md:grid-cols-[1fr_1.35fr_1fr] md:items-center">
                  {/* ✅ left character (bigger + pushed out) */}
                  <div className="hidden md:block overflow-visible">
                    {leftChar ? (
                      <img
                        src={leftChar}
                        alt=""
                        className="h-[210px] lg:h-[255px] w-full object-contain md:-translate-x-6 lg:-translate-x-10"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[210px] w-full rounded-2xl bg-white/5" />
                    )}
                  </div>

                  {/* center text צור */}
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

                  {/* ✅ right character (bigger + pushed out) */}
                  <div className="hidden md:block overflow-visible">
                    {rightChar ? (
                      <img
                        src={rightChar}
                        alt=""
                        className="h-[210px] lg:h-[255px] w-full object-contain md:translate-x-6 lg:translate-x-10"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[210px] w-full rounded-2xl bg-white/5" />
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
