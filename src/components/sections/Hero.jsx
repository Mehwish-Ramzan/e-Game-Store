import Container from "../layout/Container";
import Button from "../ui/Buttons.jsx";
import { heroContent } from "../data/home.js";
import { img } from "../../utils/assets.js";

export default function Hero() {
  const bg = heroContent.bgImage ? img(heroContent.bgImage) : "";

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-bg"
      style={
        bg
          ? {
              backgroundImage: `
                radial-gradient(900px 500px at 35% 10%, rgba(255,122,0,0.08), transparent 60%),
                linear-gradient(to bottom, rgba(11,16,24,0.25), rgba(11,16,24,0.85)),
                url(${bg})
              `,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* ✅ extra soft overlay (NOT black) */}
      <div className="absolute " />

      <Container className="pt-10 mt-10 pb-10 lg:pt-14 lg:pb-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-brand">{heroContent.headingTop}</span>
              <br />
              <span className="text-text">{heroContent.headingBottom}</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-muted/80">
              {heroContent.subtext}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button variant="primary">{heroContent.ctaPrimary}</Button>
              <Button variant="outlineBrand">{heroContent.ctaSecondary}</Button>
            </div>
          </div>

          {/* Right: Most Popular Games (NO outer box) */}
          <div className="lg:justify-self-end w-full max-w-[640px]">
            <h3 className="text-lg font-semibold text-text">
              {heroContent.popularTitleLeft}{" "}
              <span className="text-brand">{heroContent.popularTitleHighlight}</span>{" "}
              {heroContent.popularTitleRight}
            </h3>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroContent.popularGames.map((g) => {
                const poster = img(g.image);

                return (
                  <div
                    key={g.title}
                    className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-surface/30 shadow-soft"
                  >
                    <img
                      src={poster}
                      alt={g.title}
                      className="h-[210px] w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg/80 to-transparent" />
                    
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
