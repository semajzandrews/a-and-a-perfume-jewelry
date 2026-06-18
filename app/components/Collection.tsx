"use client";

import Reveal from "./Reveal";

type Case = {
  tag: string;
  title: string;
  copy: string;
  img: string;
  alt: string;
  span: string;
};

const cases: Case[] = [
  {
    tag: "Fragrance",
    title: "The perfume wall",
    copy: "Designer bottles and the oud, amber, and musk attars our regulars come back for. Testers always open.",
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1100&auto=format&fit=crop",
    alt: "Row of perfume bottles on a warm shelf",
    span: "sm:col-span-7 sm:row-span-2",
  },
  {
    tag: "Gold",
    title: "Chains & name pieces",
    copy: "Gold by the gram, a name in cursive, the chain you actually wear.",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop",
    alt: "Gold chain necklaces close up",
    span: "sm:col-span-5",
  },
  {
    tag: "Everyday gold",
    title: "Studs & first earrings",
    copy: "From a baby&apos;s first pair to a small everyday hoop.",
    img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=900&auto=format&fit=crop",
    alt: "Pair of gold earrings on a soft surface",
    span: "sm:col-span-5",
  },
  {
    tag: "The counter",
    title: "Wrapped, ready to give",
    copy: "We pair the scent and the piece, wrap it, and hand it over ready.",
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1100&auto=format&fit=crop",
    alt: "A wrapped gift box with ribbon",
    span: "sm:col-span-7",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="band bg-parchment-3">
      <div className="brass-rule" />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="kicker">The cases</span>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.0] text-cacao">
              What&apos;s under the <span className="disp-italic text-coffee">glass</span>.
            </h2>
          </div>
          <p className="max-w-[24rem] text-cacao/70 text-[0.95rem] leading-relaxed">
            A small shop, kept deep. If you don&apos;t see it, ask at the counter and
            we&apos;ll likely have it in the back.
          </p>
        </div>

        <div className="grid sm:grid-cols-12 auto-rows-[200px] sm:auto-rows-[210px] gap-4">
          {cases.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className={`group relative overflow-hidden rounded-[3px] ring-1 ring-[var(--rule-2)] ${c.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(42,29,20,0.86) 0%, rgba(42,29,20,0.18) 48%, transparent 80%)" }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="font-mono text-[0.62rem] tracking-[0.3em] uppercase text-brass">{c.tag}</span>
                <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-parchment">{c.title}</h3>
                <p
                  className="mt-1.5 text-[0.86rem] text-parchment/80 max-w-[26rem]"
                  dangerouslySetInnerHTML={{ __html: c.copy }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="brass-rule" />
    </section>
  );
}
