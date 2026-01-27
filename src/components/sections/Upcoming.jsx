import { useMemo } from "react";
import Container from "../layout/Container";
import { img } from "../../utils/assets";
import { upcomingContent } from "../data/home";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="text-white/55"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      className="text-white/55"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <path d="M5 6h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default function Upcoming() {
  const content =
    upcomingContent ?? ({
      title: "Up Coming Games",
      viewAll: "View All",
      dots: 5,
      games: [
        { title: "FC25", image: "upcoming-1.png", time: "51s", date: "27/10/2025", tag: "Pre-Order" },
        { title: "Marvel: Wolverine", image: "upcoming-2.png", time: "51s", date: "Early 2025", tag: "Pre-Order" },
        { title: "Star Wars Outlaws", image: "upcoming-3.png", time: "51s", date: "Mid 2025", tag: "Pre-Order" },
        { title: "GTA VI", image: "upcoming-4.png", time: "51s", date: "Late 2025", tag: "Pre-Order" },
        { title: "The Witcher 4", image: "upcoming-5.png", time: "51s", date: "Mid 2026", tag: "Pre-Order" },
      ],
    });

  const games = useMemo(() => content.games ?? [], [content.games]);
  const dotsCount = Math.max(1, Number(content.dots ?? 5));

  return (
    <section id="upcoming" className="relative">
      <Container className="pt-6 pb-10 lg:pt-8 lg:pb-12">
        {/* header */}
        <div className="flex items-center gap-6">
          <h2 className="ml-20 text-base sm:text-lg font-semibold text-white">{content.title}</h2>

          <button className="text-xs sm:text-sm text-brand hover:opacity-90 transition">
            {content.viewAll} <span aria-hidden="true">›</span>
          </button>
        </div>

        {/* five cards (Figma-like row) */}
        <div className=" ml-20 items-center mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {games.slice(0, 5).map((g) => {
            const poster = safeImg(g.image);

            return (
              <article key={g.title} className="min-w-0">
                <div className="rounded-2xl overflow-hidden bg-white/[0.02] ring-1 ring-brand/35 hover:ring-brand/55 transition">
                  {/* image */}
                  <div className="relative">
                    {poster ? (
                      <img
                        src={poster}
                        alt={g.title}
                        className="h-[250px] w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-[250px] w-full bg-white/10" />
                    )}

                    {/* bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* bottom info */}
                  <div className="px-3 py-3">
                    <h3 className="text-sm font-semibold text-white truncate">{g.title}</h3>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
                      <span className="inline-flex items-center gap-2">
                        <ClockIcon />
                        {g.time ?? ""}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <span className="text-white/60">{g.tag ?? "Pre-Order"}</span>
                        <ArrowIcon />
                      </span>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-white/60">
                      <span className="inline-flex items-center gap-2">
                        <CalendarIcon />
                        {g.date ?? ""}
                      </span>

                      <span className="text-brand">{g.rightNote ?? ""}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
