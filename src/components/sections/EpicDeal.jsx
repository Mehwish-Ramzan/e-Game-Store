import Container from "../layout/Container";
import { img } from "../../utils/assets";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

export default function EpicDeal() {
  // ✅ Update these 5 filenames to your exact downloaded names
  const images = [
    "playgame-1.png",
    "playgame-2.png",
    "playgame-3.png",
    "playgame-4.png",
    "playgame-5.png",
  ];

  const panels = images.map((f) => safeImg(f)).filter(Boolean);

  // ✅ Figma-style slice clip paths
  const clipFor = (i) => {
    if (i === 0) return "polygon(0% 0%, 92% 0%, 78% 100%, 0% 100%)";
    if (i === 4) return "polygon(22% 0%, 100% 0%, 100% 100%, 8% 100%)";
    return "polygon(22% 0%, 92% 0%, 78% 100%, 8% 100%)";
  };

  // ✅ Responsive positioning (percent-based) so it stays like figma on all screens
  const SLICE_W = 36; // width of each slice in %
  const STEP = 16; // left step in % (overlap happens naturally)

  const sliceStyle = (i) => ({
    left: `${i * STEP}%`,
    width: `${SLICE_W}%`,
    zIndex: 10 + i,
    clipPath: clipFor(i),
  });

  return (
    <section id="epic-deals" className="relative">
      <Container className="pt-10 pb-6 lg:pt-4 lg:pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight">
              <span className="text-brand">Play Your Best Game</span>
              <br />
              <span className="text-white">&amp; Collect Epic Deals</span>
            </h2>

            <p className="mt-3 max-w-md text-xs sm:text-sm text-white/70 leading-relaxed">
              Discover limited-time discounts on top-selling games, gift cards,
              and bundles.
              <br />
              New deals added every day — don’t miss out!
            </p>

            <div className="mt-5 flex items-center gap-4">
              <button className="btn-primary px-7">Browse Deals</button>

              <button
                className="btn px-7 bg-black/20 text-white border border-brand/70 hover:bg-brand/10"
                type="button"
              >
                View Games
              </button>
            </div>
          </div>

          {/* RIGHT COLLAGE (Figma like: single rectangle with diagonal slices) */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[640px]">
              {/* shadow / glow behind like figma */}
              <div className="absolute -inset-4 rounded-[28px] bg-black/40 blur-2xl opacity-70" />

              {/* main collage wrapper */}
              <div className="relative h-[190px] sm:h-[220px] lg:h-[240px] rounded-[22px] overflow-hidden">
                {/* slices */}
                {Array.from({ length: 5 }).map((_, i) => {
                  const src = panels[i] || "";
                  return (
                    <div
                      key={i}
                      className="absolute inset-y-0 overflow-hidden"
                      style={sliceStyle(i)}
                    >
                      {src ? (
                        <img
                          src={src}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-full w-full bg-white/10" />
                      )}
                    </div>
                  );
                })}

                {/* figma-like dark vignette overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/60" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/40" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_220px_at_50%_40%,rgba(255,255,255,0.06),transparent_60%)]" />

                {/* subtle border */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
