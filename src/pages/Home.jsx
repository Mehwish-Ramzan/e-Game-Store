import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import Categories from "../components/sections/Categories.jsx";
import Trending from "../components/sections/Trending.jsx";
import Tournaments from "../components/sections/Tournaments.jsx";
import Bestsellers from "../components/sections/Bestsellers.jsx";
import Upcoming from "../components/sections/Upcoming.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Top sections */}
      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <Tournaments />
      <Bestsellers />
      <Upcoming />
    </div>
  );
}
