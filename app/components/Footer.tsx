export default function Footer() {
  return (
    <footer className="band relative bg-cacao-2 text-parchment">
      <div className="brass-rule-l" />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Wordmark + line */}
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-[2.4rem] leading-none">A &amp; A</span>
              <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-brass">
                Perfume &amp; Jewelry
              </span>
            </div>
            <p className="mt-5 max-w-[26rem] text-[0.92rem] leading-relaxed text-parchment/65">
              A neighborhood perfume and jewelry gift shop on Main Street, City of
              Orange, New Jersey. A gift, composed by hand.
            </p>
            <a
              href="#visit"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[rgba(242,235,221,0.25)] px-5 py-2.5 text-[0.8rem] tracking-wide text-parchment hover:bg-[rgba(242,235,221,0.08)] transition-colors"
            >
              Find the shop
            </a>
          </div>

          {/* Visit */}
          <div className="md:col-span-4">
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-brass">Visit</span>
            <p className="mt-4 font-display text-lg leading-snug">
              305 Main St
              <br />
              City of Orange, NJ 07050
            </p>
            <p className="mt-4 text-[0.86rem] text-parchment/60 leading-relaxed">
              Monday to Saturday, daytime into the early evening.
              <br />
              Sunday hours vary.
            </p>
          </div>

          {/* Wander */}
          <div className="md:col-span-3">
            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-brass">On the page</span>
            <ul className="mt-4 space-y-2.5 text-[0.9rem] text-parchment/70">
              <li><a href="#composed" className="ulink">The Idea</a></li>
              <li><a href="#notes" className="ulink">Scent Notes</a></li>
              <li><a href="#collection" className="ulink">The Cases</a></li>
              <li><a href="#visit" className="ulink">Visit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-[rgba(242,235,221,0.14)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[0.74rem] text-parchment/45">
            © {new Date().getFullYear()} A and A Perfume and Jewelry · Main Street, City of Orange, NJ
          </p>
          <a
            href="https://bysemaj.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.74rem] text-parchment/55 hover:text-parchment transition-colors"
          >
            <span className="h-1 w-1 rounded-full bg-brass transition-transform group-hover:scale-150" />
            Built by <span className="font-display text-[0.95rem] tracking-tight text-parchment/80 group-hover:text-amber transition-colors">bysemaj.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
