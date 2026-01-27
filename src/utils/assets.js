// Safe asset loader for Vite.
// It returns "" if file not found, so app never crashes.

const images = import.meta.glob("../assets/images/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

// IMPORTANT: your folder name is "icons" (plural)
const icons = import.meta.glob("../assets/icons/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});

export const img = (fileName) => images[`../assets/images/${fileName}`] ?? "";
export const icon = (fileName) => icons[`../assets/icons/${fileName}`] ?? "";
