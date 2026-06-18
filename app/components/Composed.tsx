"use client";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    t: "The fragrance",
    d: "Designer houses and the warm Arabian oud and amber attars our neighborhood asks for by name. We open the testers. You smell before you buy.",
  },
  {
    n: "02",
    t: "The adornment",
    d: "Gold and sterling. Chains, studs, a name in script, a first pair of earrings. Small repairs and battery changes while you wait at the counter.",
  },
  {
    n: "03",
    t: "The gift",
    d: "We pair the two, wrap it at the counter, and hand it over ready to give. A birthday, a graduation, an apology, a just-because.",
  },
];

export default function Composed() {
  return (
    <section id="composed" className="band bg-parchment-2">
      <div className="brass-rule" />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="kicker">The idea</span>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.02] text-cacao">
                One counter.
                <br />
                <span className="disp-italic text-coffee">Two halves</span> of a gift.
              </h2>
              <p className="mt-6 text-cacao/70 leading-relaxed max-w-[28rem]">
                A perfume and jewelry shop is really a place that composes a gift in
                layers. Here is how a visit goes.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-[2px] overflow-hidden">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 110}
                className="bg-parchment-2 p-7 sm:p-8 flex flex-col min-h-[15rem]"
              >
                <span className="font-mono text-[0.72rem] tracking-[0.3em] text-brass">{s.n}</span>
                <h3 className="mt-5 font-display text-2xl text-cacao">{s.t}</h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-cacao/70">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <div className="brass-rule" />
    </section>
  );
}
