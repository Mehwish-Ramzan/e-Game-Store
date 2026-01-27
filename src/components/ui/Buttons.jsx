// Reusable button with variants (keeps code clean + consistent)

const base =
  "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20";

const variants = {
  primary: "bg-brand text-black hover:brightness-110",
  outline: "border border-white/20 bg-white/5 text-text hover:bg-white/10",
  outlineBrand: "border border-brand/70 bg-black/10 text-text hover:bg-brand/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
