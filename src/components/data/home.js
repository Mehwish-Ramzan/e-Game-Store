// Update filenames here to match your downloaded Figma assets.
// If any file name is wrong, UI will still render (image will just not show).

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "PC Games", href: "#pc" },
  { label: "Xbox", href: "#xbox" },
  { label: "PlayStation", href: "#ps" },
  { label: "Nintendo", href: "#nintendo" },
  { label: "Gift Cards", href: "#giftcards" },
  { label: "Deals", href: "#deals" },
  { label: "Pre-orders", href: "#preorders" },
  { label: "Blog", href: "#blog" },
];

export const heroContent = {
  // Put your hero background image file name here (inside src/assets/images)
  bgImage: "heroContent.bgImage.png",

  headingTop: "Your Next Game Is",
  headingBottom: "Just One Click Away.",
  subtext: "Get instant CDKeys for less — play in seconds.",
  ctaPrimary: "Browse Deals",
  ctaSecondary: "View Games",

  popularTitleLeft: "The Most",
  popularTitleHighlight: "Pupular",
  popularTitleRight: "Games",

  popularGames: [
    { title: "The Witcher 3", image: "popular-1.png" },
    { title: "Red Dead Redemption 2", image: "popular-2.png" },
    { title: "The Last of Us Part II", image: "popular-3.png" },
    { title: "Ghost of Tsushima", image: "popular-4.png" },
  ],
};

export const categories = [
  { label: "Sports & Racing", image: "image1.png" },
  { label: "RPG", image: "image2.png" },
  { label: "Adventure", image: "image3.png" },
  { label: "Strategy", image: "image4.png" },
  { label: "Survival", image: "image5.png" },
  { label: "Action", image: "image6.png" },
];

/* =========================
   TRENDING GAMES (NEW)
========================= */
export const trendingContent = {
  title: "Trending Games",
  viewAll: "View All",
  // Update these images after you download from Figma (place in src/assets/images)
  games: [
    {
      title: "Fortnite",
      image: "trending-1.png",
      price: "$51",
      rating: 4.5,
      badge: "15%",
    },
    {
      title: "Minecraft",
      image: "trending-2.png",
      price: "$51",
      rating: 4.6,
      badge: "15%",
    },
    {
      title: "Counter-Strike 2",
      image: "trending-3.png",
      price: "$51",
      rating: 4.4,
      badge: "15%",
    },
    {
      title: "Spider-Man 2",
      image: "trending-4.png",
      price: "$51",
      rating: 4.7,
      badge: "15%",
    },
    {
      title: "The Witcher 3",
      image: "trending-5.png",
      price: "$51",
      rating: 4.8,
      badge: "15%",
    },
  ],
};

/* =========================
   TOURNAMENTS (NEW)
========================= */
export const tournamentsContent = {
  titleAccent: "Join",
  titleRest: "The Big Tournaments",
  bgImage: "tournament-bg.png",
  arrow: "arrow.png", 

  // small cards row (update images after download)
  games: [
    { title: "League of Legends", image: "tour-1.png" },
    { title: "Apex Legends", image: "tour-2.png" },
    { title: "Counter Strike", image: "tour-3.png" },
    { title: "World of Warcraft", image: "tour-4.png" },
    { title: "Dota 2", image: "tour-5.png" },
    { title: "Fortnite", image: "tour-6.png" },
  ],

  battleCard: {
    title: "Ready for",
    titleHighlight: "Battle?",
    desc:
      "Dive into thrilling esports tournaments, global gaming events, and epic community challenges. Victory awaits.",
    cta: "JOIN NOW",

    // optional images (update later)
    bgImage: "battle-bg.png",
    leftChar: "battle-left.png",
    rightChar: "battle-right.png",
  },
};

/* =========================
   BESTSELLERS (NEW)
========================= */
export const bestsellersContent = {
  title: "Bestsellers",
  viewAll: "View All",
  dots: 5,
  games: [
    {
      title: "Fortnite",
      image: "bestseller-1.png",
      price: "$51",
      rating: 4.6,
      badge: 15,
    },
    {
      title: "Minecraft",
      image: "bestseller-2.png",
      price: "$51",
      rating: 4.7,
      badge: 15,
    },
    {
      title: "Counter Strike 2",
      image: "bestseller-3.png",
      price: "$51",
      rating: 4.5,
      badge: 15,
    },
    {
      title: "Spider-Man 2",
      image: "bestseller-4.png",
      price: "$51",
      rating: 4.8,
      badge: 15,
    },
    {
      title: "The Witcher 3",
      image: "bestseller-5.png",
      price: "$51",
      rating: 4.9,
      badge: 15,
    },
  ],
};

/* =========================
   UPCOMING GAMES (NEW)
========================= */
export const upcomingContent = {
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

/* =========================
   BLOG (NEW)
========================= */
export const blogContent = {
  title: "Blog Post",
  viewAll: "View All",
  dots: 5,

  posts: [
    {
      id: 1,
      image: "blog-1.png",
      featured: true,
    },
    {
      id: 2,
      image: "blog-2.png",
      featured: false,
    },
    {
      id: 3,
      image: "blog-3.png",
      featured: false,
    },
    {
      id: 4,
      image: "blog-4.png",
      featured: false,
    },
    {
      id: 5,
      image: "blog-5.png",
      featured: false,
    },
  ],
};

/* =========================
   FOOTER (NEW)
========================= */
export const footerContent = {
  brand: {
    name: "EGAME\nSTORE.COM",
    desc:
      "Step into the future of gaming with EGame Store. Explore top-tier reviews, news, and in-depth analysis on the latest and greatest games. Join the gaming community now to get exclusive content and features.",
  },

  social: [
    { id: "facebook", href: "#" },
    { id: "instagram", href: "#" },
    { id: "x", href: "#" },
    { id: "youtube", href: "#" },
  ],

  columns: [
    {
      title: "Quick Links",
      links: ["Home", "Gift Cards", "Deals", "Blog"],
    },
    {
      title: "Resources",
      links: ["Trending Games", "Upcoming Games", "Reviews", "FAQ"],
    },
    {
      title: "Explore",
      links: ["PC Games", "PlayStation", "Nintendo", "Xbox"],
    },
  ],

  contact: {
    title: "Contact Us",
    items: [
      { type: "pin", value: "0000000000" },
      { type: "phone", value: "0000000000" },
      { type: "mail", value: "Egamestore@Gmail.Com" },
    ],
  },

  copyright: "© 2025 EGameStore.Com - All Rights Reserved.",
};
