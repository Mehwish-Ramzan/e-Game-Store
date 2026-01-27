import { useMemo, useState } from "react";
import Container from "./Container";
import Button from "../ui/Buttons.jsx";
import { navLinks } from "../data/home.js";
import { icon } from "../../utils/assets.js";

// NOTE: Logo path given by you (fixed import so it always works)
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const links = useMemo(() => navLinks, []);

  return (
    <header className="relative z-50">
      <Container className="py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="E Game Store" className="h-7 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`relative text-sm transition ${
                  active === l.label ? "text-white" : "text-white/75 hover:text-white"
                }`}
              >
                {l.label}
                {/* Active underline */}
                {active === l.label && (
                  <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-brand rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Search icon */}
            <button
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
              aria-label="Search"
              type="button"
            >
              {/* Uses your given file name in assets/icon */}
              <img
                src={icon("searchicon.png")}
                alt=""
                className="h-4 w-4 opacity-90"
              />
            </button>

            {/* Language */}
            <div className="hidden md:block">
              <select
                className="h-9 rounded-lg bg-black border-black px-3 text-sm text-white/80 ring-1 ring-white/10 transition"
                defaultValue="en"
                aria-label="Language"
              >
                <option value="en">En</option>
                <option value="ur">Ur</option>
              </select>
            </div>

            {/* Sign In */}
            <Button className="h-9 px-5 py-0 text-sm" variant="primary">
              Sign In
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block h-4 w-5 relative">
                <span className="absolute left-0 top-0 h-[2px] w-full bg-white/80" />
                <span className="absolute left-0 top-[7px] h-[2px] w-full bg-white/80" />
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white/80" />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="lg:hidden mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className={`text-sm ${
                    active === l.label ? "text-white" : "text-white/75"
                  }`}
                >
                  {l.label}
                </a>
              ))}

              <div className="flex items-center gap-2 pt-2">
                <button
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition"
                  aria-label="Search"
                  type="button"
                >
                  <img
                    src={icon("searchicon.png")}
                    alt=""
                    className="h-4 w-4 opacity-90"
                  />
                </button>

                <select
                  className="h-9 flex-1 rounded-lg bg-white/5 px-3 text-sm text-white/80 outline-none ring-1 ring-white/10 hover:bg-white/10 transition"
                  defaultValue="en"
                  aria-label="Language"
                >
                  <option value="en">En</option>
                  <option value="ur">Ur</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
