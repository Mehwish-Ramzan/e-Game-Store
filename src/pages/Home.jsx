import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import Categories from "../components/sections/Categories.jsx";
import Trending from "../components/sections/Trending.jsx";
import Tournaments from "../components/sections/Tournaments.jsx";
import Bestsellers from "../components/sections/Bestsellers.jsx";
import Upcoming from "../components/sections/Upcoming.jsx";
import EpiDeal from "../components/sections/EpicDeal.jsx";
import Review from "../components/sections/Review.jsx";
import Blog from "../components/sections/Blog.jsx";
import Footer from "../components/layout/Footer.jsx";

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
      <EpiDeal />
      <Review />
      <Blog />
      <Footer />
    </div>
  );
}
