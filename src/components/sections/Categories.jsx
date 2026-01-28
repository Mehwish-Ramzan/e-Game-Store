import Container from "../layout/Container";
import { categories } from "../data/home.js";
import { img } from "../../utils/assets";

function CategoryCard({ label, image, className = "" }) {
  const src = img(image);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 ${className}`}
    >
      {/* Background image */}
      {src ? (
        <img
          src={src}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-white/10" />
      )}

      
      {/* Label */}
      <div className="absolute left-4 bottom-4">
        <span className="text-sm font-medium text-white">{label}</span>
      </div>
    </div>
  );
}

export default function Categories() {
  // Expecting 6 categories in this order (as your design):
  // 0 Sports & Racing | 1 RPG | 2 Adventure
  // 3 Strategy | 4 Survival | 5 Action
  const c = categories;

  return (
    <section className="pb-10lg:pb-14 lg:mt-20">
      <Container>
        {/* Grid like Figma (12 columns on lg) */}
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Top row */}
          <CategoryCard
            image={c?.[0]?.image ?? ""}
            className="h-[160px] sm:h-[190px] lg:col-span-6 lg:h-[210px]"
          />
          <CategoryCard
            image={c?.[1]?.image ?? ""}
            className="h-[140px] sm:h-[170px] lg:col-span-3 lg:h-[210px]"
          />
          <CategoryCard
            image={c?.[2]?.image ?? ""}
            className="h-[140px] sm:h-[170px] lg:col-span-3 lg:h-[210px]"
          />

          {/* Bottom row */}
          <CategoryCard
            image={c?.[3]?.image ?? ""}
            className="h-[140px] sm:h-[170px] lg:col-span-3 lg:h-[200px]"
          />
          <CategoryCard
            image={c?.[4]?.image ?? ""}
            className="h-[140px] sm:h-[170px] lg:col-span-3 lg:h-[200px]"
          />
          <CategoryCard
            image={c?.[5]?.image ?? ""}
            className="h-[160px] sm:h-[190px] lg:col-span-6 lg:h-[200px]"
          />
        </div>
      </Container>
    </section>
  );
}
