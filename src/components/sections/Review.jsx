import { useEffect, useMemo, useState } from "react";
import Container from "../layout/Container";
import { img } from "../../utils/assets";

function safeImg(file) {
  try {
    return file ? img(file) : "";
  } catch {
    return "";
  }
}

function StarsRow({ count = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-brand text-sm leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ data, variant = "side" }) {
  const isCenter = variant === "center";

  // ✅ sizes (center bigger like figma)
  const sizeClass = isCenter
    ? "w-[320px] h-[255px] sm:w-[350px] sm:h-[275px]"
    : "w-[250px] h-[210px] sm:w-[270px] sm:h-[225px]";

  // ✅ orange accent like figma (less random rotation, more clean offset)
  const accentPos =
    variant === "left"
      ? "translate-x-[-18px] translate-y-[18px]"
      : variant === "right"
      ? "translate-x-[18px] translate-y-[18px]"
      : "translate-x-[14px] translate-y-[16px]";

  const avatar = safeImg(data.avatar);

  return (
    <div className={`relative ${sizeClass}`}>
      {/* orange accent behind */}
      <div
        className={`absolute inset-0 rounded-[52px] bg-brand ${accentPos}`}
      />

      {/* main card */}
      <div className="absolute inset-0 rounded-[52px] bg-black/90 ring-1 ring-white/10 shadow-soft overflow-hidden">
        {/* subtle inner gradient like figma */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* avatar */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-white/20 bg-white/10">
          {avatar ? (
            <img
              src={avatar}
              alt={data.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-white/10" />
          )}
        </div>
      </div>

      {/* content */}
      <div className="relative h-full px-7 pt-10 pb-6 text-center">
        <h4 className="text-sm font-semibold text-white">{data.name}</h4>

        <div className="mt-2">
          <StarsRow count={5} />
        </div>

        <p className="mt-3 text-[11px] sm:text-xs leading-relaxed text-white/70">
          {data.text}
        </p>
      </div>
    </div>
  );
}

export default function Review() {
  const content = useMemo(
    () => ({
      title: "Customer Reviews",
      dots: 5, // ✅ figma me 5 dots
      reviews: [
        {
          name: "Leo",
          avatar: "review-1.png",
          text:
            "Store is amazing. Great deals and fast delivery. Easy checkout and smooth experience. I’ll definitely come back for more.",
        },
        {
          name: "Hannah Schmitt",
          avatar: "review-2.png",
          text:
            "Get ready to level up your fun! This site delivers thrilling games, non-stop updates, and a smooth, blazing-fast experience that keeps you hooked for hours.",
        },
        {
          name: "Hannah Schmitt",
          avatar: "review-3.png",
          text:
            "Your ultimate gaming destination is here. Best prices, fast checkout, and endless adventures. Play, explore, and conquer without limits.",
        },
      ],
    }),
    []
  );

  const reviews = content.reviews ?? [];

  // ✅ step controls dots movement (5 dots), reviews cycle by mod
  const [step, setStep] = useState(0);

  const dotsCount = Math.max(1, Number(content.dots ?? 5));
  const activeDot = step % dotsCount;
  const active = reviews.length ? step % reviews.length : 0;

  // ✅ auto rotate (autorotate)
  useEffect(() => {
    if (!reviews.length) return;
    const t = setInterval(() => setStep((s) => s + 1), 3200);
    return () => clearInterval(t);
  }, [reviews.length]);

  const normalizeOffset = (i) => {
    const len = reviews.length;
    let off = i - active;
    if (off > len / 2) off -= len;
    if (off < -len / 2) off += len;
    return off;
  };

  return (
    <section id="reviews" className="relative">
      <Container className="pt-8 pb-12 lg:pt-10 lg:pb-14">
        <h3 className="text-sm font-semibold text-white/90">{content.title}</h3>

        {/* ✅ stage (more height, no clipping, figma spacing) */}
        <div className="relative mt-10 h-[330px] sm:h-[360px] overflow-visible">
          {reviews.map((r, i) => {
            const off = normalizeOffset(i); // -1,0,1 for 3 cards
            const isCenter = off === 0;

            // ✅ positions tuned closer to figma
            const x = off * 320;
            const y = isCenter ? 0 : 22;
            const scale = isCenter ? 1 : 0.92;
            const rotate = off === -1 ? -12 : off === 1 ? 12 : 0;
            const opacity = Math.abs(off) > 1 ? 0 : 1;
            const z = isCenter ? 30 : 20;

            return (
              <div
                key={`${r.name}-${i}`}
                className="absolute left-1/2 top-0 transition-[transform,opacity] duration-700 ease-out"
                style={{
                  zIndex: z,
                  opacity,
                  transform: `translateX(calc(-50% + ${x}px)) translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
                }}
              >
                <ReviewCard
                  data={r}
                  variant={isCenter ? "center" : off === -1 ? "left" : "right"}
                />
              </div>
            );
          })}
        </div>

        {/* ✅ dots like figma */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === activeDot ? "bg-brand" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
