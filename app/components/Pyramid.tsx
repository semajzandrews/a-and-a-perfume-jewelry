"use client";

import { useEffect, useRef, useState } from "react";

type Stratum = {
  key: string;
  tier: string;
  label: string;
  notes: string;
  pairs: string;
  cls: string; // clip-path class
  fill: string; // fill color
  w: string; // width of the band
};

const strata: Stratum[] = [
  {
    key: "top",
    tier: "Top notes",
    label: "First impression",
    notes: "Bergamot · Pink pepper · Bright citrus",
    pairs: "Pairs with: a pair of small gold studs",
    cls: "strat-top",
    fill: "rgba(201,138,60,0.92)",
    w: "44%",
  },
  {
    key: "heart",
    tier: "Heart notes",
    label: "What they remember",
    notes: "Rose · Jasmine · Warm spice",
    pairs: "Pairs with: a fine chain or a name in script",
    cls: "strat-heart",
    fill: "rgba(111,78,55,0.95)",
    w: "62%",
  },
  {
    key: "base",
    tier: "Base notes",
    label: "What lingers",
    notes: "Oud · Amber · Vanilla · Musk",
    pairs: "Pairs with: a signet or a band in gold",
    cls: "strat-base",
    fill: "rgba(58,42,30,0.97)",
    w: "82%",
  },
];

export default function Pyramid() {
  const [drawn, setDrawn] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setDrawn(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="notes" className="band bg-parchment overflow-hidden">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-[40rem]">
          <span className="kicker">The signature · scent notes</span>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.0] text-cacao">
            A fragrance is built in <span className="disp-italic text-coffee">three layers</span>.
          </h2>
          <p className="mt-6 text-cacao/70 leading-relaxed">
            So is the gift we build around it. Run your eye down the pyramid. Touch a
            layer to see its notes and the piece of jewelry we&apos;d set beside it.
          </p>
        </div>

        <div ref={ref} className="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Pyramid */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative mx-auto max-w-[440px] flex flex-col gap-2.5">
              {strata.map((s, i) => {
                const isActive = active === s.key;
                return (
                  <button
                    key={s.key}
                    onMouseEnter={() => setActive(s.key)}
                    onFocus={() => setActive(s.key)}
                    onClick={() => setActive((p) => (p === s.key ? null : s.key))}
                    aria-label={`${s.tier}: ${s.notes}`}
                    className={`pyramid-strata group relative block w-full text-left ${isActive ? "lifted" : ""}`}
                    style={{ height: 78 }}
                  >
                    {/* trapezoid */}
                    <div className={`absolute inset-0 ${s.cls}`}>
                      <div
                        className={`strat-fill h-full w-full ${drawn ? "drawn" : ""}`}
                        style={{
                          background: s.fill,
                          transitionDelay: `${i * 220}ms`,
                          boxShadow: isActive ? "0 16px 40px -16px rgba(58,42,30,0.55)" : "none",
                        }}
                      />
                    </div>
                    {/* tier label centered over band */}
                    <span
                      className="absolute inset-0 flex items-center justify-center font-mono text-[0.62rem] tracking-[0.28em] uppercase z-10"
                      style={{ color: i === 0 ? "#3A2A1E" : "#F2EBDD" }}
                    >
                      {s.tier}
                    </span>
                  </button>
                );
              })}
              <p className="mt-3 text-center font-mono text-[0.6rem] tracking-[0.3em] text-cacao/45 uppercase">
                Top · Heart · Base
              </p>
            </div>
          </div>

          {/* Readout */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-[3px] border border-[var(--rule-2)] bg-parchment-2 p-7 sm:p-9 min-h-[16rem] flex flex-col justify-center">
              {strata.map((s) => {
                const isActive = active ? active === s.key : s.key === "heart";
                if (!isActive) return null;
                return (
                  <div key={s.key} className="animate-[fadein_0.5s_ease]">
                    <span className="font-mono text-[0.66rem] tracking-[0.3em] text-brass uppercase">
                      {s.tier} · {s.label}
                    </span>
                    <p className="mt-4 font-display text-[clamp(1.6rem,3.5vw,2.4rem)] leading-tight text-cacao">
                      {s.notes}
                    </p>
                    <div className="mt-6 h-px w-full bg-[var(--rule)]" />
                    <p className="mt-5 text-[0.92rem] text-coffee">{s.pairs}</p>
                  </div>
                );
              })}
              <p className="mt-7 text-[0.78rem] text-cacao/50">
                Every fragrance on our shelf is testable in store. We&apos;ll find the
                one that fits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
