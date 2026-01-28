import { useMemo } from "react";
import Container from "../layout/Container";
import { img } from "../../utils/assets";
import { upcomingContent } from "../data/home";
import { tournamentsContent } from "../data/home";
import arrowIcon from "../../assets/icons/arrowicon.png";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}


function CalendarIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 2v3M16 2v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 8h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Upcoming() {
  const buyArrow = safeImg(tournamentsContent?.arrow);
  const content =
    upcomingContent ?? {
      title: "Up Coming Games",
      viewAll: "View All",
      dots: 5,
      games: [
        {
          title: "FC25",
          image: "upcoming-1.png",
          time: "51s",
          date: "27/12/2025",
          tag: "Pre-order",
        },
        {
          title: "Marvel: Wolverine",
          image: "upcoming-2.png",
          time: "51s",
          date: "Early 2025",
          tag: "Pre-order",
        },
        {
          title: "Star Wars Outlaws",
          image: "upcoming-3.png",
          time: "51s",
          date: "Mid 2025",
          tag: "Pre-order",
        },
        {
          title: "GTA VI",
          image: "upcoming-4.png",
          time: "51s",
          date: "Late 2025",
          tag: "Pre-order",
        },
        {
          title: "The Witcher 4",
          image: "upcoming-5.png",
          time: "51s",
          date: "Mid 2026",
          tag: "Pre-order",
        },
      ],
    };

  const games = useMemo(() => content.games ?? [], [content.games]);
  const dotsCount = Math.max(1, Number(content.dots ?? games.length ?? 5));

  return (
    <section id="upcoming" className="relative">
      <Container className="pt-8 pb-12 lg:pt-6 lg:pb-14">
        {/* Header */}
        <div className="flex items-center gap-8">
          <h2 className="text-lg font-semibold text-white">{content.title}</h2>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-sm text-brand hover:opacity-90 transition"
          >
            {content.viewAll}
            <img src={arrowIcon} alt="" className="h-4 w-4" />
          </button>
        </div>

        {/* Cards Row (Desktop: 5 in one line, Mobile: horizontal scroll) */}
        <div
          className="mt-6 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory
                     [scrollbar-width:none] [-ms-overflow-style:none]
                     [&::-webkit-scrollbar]:hidden
                     lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0"
        >
          {games.map((g) => {
            const poster = safeImg(g.image);

            return (
              <article
                key={g.title}
                className="snap-start shrink-0 w-[260px] sm:w-[280px] lg:w-auto"
              >
                {/* Outer card */}
                <div className="rounded-2xl bg-white/[0.02] ring-1 ring-brand/45 shadow-soft">
                  <div className="p-3">
                    {/* Image */}
                    <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
                      {poster ? (
                        <img
                          src={poster}
                          alt={g.title}
                          className="h-[210px] w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-[210px] w-full bg-white/10" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="mt-3">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {g.title}
                      </h3>

                      <div className="mt-2 text-sm text-white/75">{g.time ?? ""}</div>

                      <div className="mt-3 flex items-center justify-between text-[12px] text-white/55">
                        <span className="inline-flex items-center gap-2">
                          <CalendarIcon className="text-white/40" />
                          <span>{g.date ?? ""}</span>
                        </span>

                        <span className="inline-flex items-center gap-2">
                          <span className="text-white/55">{g.tag ?? "Pre-order"}</span>
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
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom dots ONLY */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === 0 ? "bg-brand" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
