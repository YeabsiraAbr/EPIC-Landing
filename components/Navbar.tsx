"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Why us", id: "why" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 84;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-pad pt-4">
        <div
          className={[
            "rounded-2xl transition-all",
            isScrolled ? "glass shadow-[0_20px_80px_rgba(0,0,0,0.45)]" : "bg-transparent",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 text-sm font-semibold tracking-tight"
              aria-label="Go to home"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/10">
                <span className="text-base">E</span>
              </span>
              <span className="hidden sm:inline text-white">Epic</span>
              <span className="hidden sm:inline text-white/60">Software</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-full px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="btn-primary">
                Let’s talk
              </a>
            </div>

            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl glass"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              <span className="text-lg">{open ? "×" : "☰"}</span>
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="pt-3 grid gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left rounded-xl px-3 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                  >
                    {item.label}
                  </button>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                  Let’s talk
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
