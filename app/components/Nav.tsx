"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#composed", label: "The Idea" },
  { href: "#notes", label: "Scent Notes" },
  { href: "#collection", label: "The Cases" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-blur bg-[rgba(242,235,221,0.82)] border-b border-[var(--rule)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[68px] flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-display text-[1.35rem] leading-none tracking-tight text-cacao">A &amp; A</span>
            <span className="hidden sm:inline kicker text-[0.6rem] mt-[2px] text-coffee/80">Perfume &amp; Jewelry</span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="ulink text-[0.82rem] tracking-wide text-cacao/80 hover:text-cacao transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-coffee px-5 py-2.5 text-[0.78rem] tracking-wide text-parchment hover:bg-coffee-2 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              Find the shop
            </a>
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-[5px] rounded-full border border-[var(--rule-2)]"
            >
              <span className={`h-px w-5 bg-cacao transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-px w-5 bg-cacao transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-px w-5 bg-cacao transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[rgba(242,235,221,0.96)] nav-blur" onClick={() => setOpen(false)} />
        <nav className="relative pt-28 px-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-cacao"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-coffee px-6 py-3 text-sm text-parchment"
          >
            Find the shop on Main St
          </a>
        </nav>
      </div>
    </>
  );
}
