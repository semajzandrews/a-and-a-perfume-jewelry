"use client";

import Reveal from "./Reveal";

const MAP_SRC =
  "https://www.google.com/maps?q=305+Main+St,+City+of+Orange,+NJ+07050&output=embed";

export default function Visit() {
  return (
    <section id="visit" className="band bg-parchment">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left — details */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal>
              <span className="kicker">Visit the shop</span>
              <h2 className="mt-5 font-display text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[1.0] text-cacao">
                Come in and <span className="disp-italic text-coffee">choose</span> with us.
              </h2>
              <p className="mt-6 text-cacao/70 leading-relaxed max-w-[30rem]">
                We&apos;re a walk-in shop on Main Street in the City of Orange. No
                appointment. Tell us the person and the occasion, and we&apos;ll put the
                gift together at the counter.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-[3px] overflow-hidden">
              <div className="bg-parchment p-6">
                <span className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-brass">Where</span>
                <p className="mt-3 font-display text-lg leading-snug text-cacao">
                  305 Main St
                  <br />
                  City of Orange, NJ 07050
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=305+Main+St,+City+of+Orange,+NJ+07050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ulink mt-3 inline-block text-[0.82rem] text-coffee"
                >
                  Get directions
                </a>
              </div>

              <div className="bg-parchment p-6">
                <span className="font-mono text-[0.62rem] tracking-[0.28em] uppercase text-brass">When</span>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-cacao/80">
                  Open through the day into the early evening, Monday to Saturday.
                  Sunday hours vary.
                </p>
                <p className="mt-2 text-[0.78rem] text-cacao/55">
                  Stopping by before a special trip? We recommend a quick visit to
                  confirm the day&apos;s hours.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=305+Main+St,+City+of+Orange,+NJ+07050"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-coffee px-7 py-4 text-[0.88rem] tracking-wide text-parchment hover:bg-coffee-2 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              Walk in on Main Street
            </a>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <div className="relative h-[340px] sm:h-full min-h-[340px] rounded-[3px] overflow-hidden ring-1 ring-[var(--rule-2)]">
                <iframe
                  title="A and A Perfume and Jewelry location map"
                  src={MAP_SRC}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0, filter: "saturate(0.85) sepia(0.12)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
