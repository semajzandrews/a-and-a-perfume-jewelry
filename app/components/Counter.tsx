"use client";

import { useEffect, useRef, useState } from "react";

function Ticker({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(el);
          if (reduce) {
            setN(to);
            return;
          }
          const dur = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Counter() {
  return (
    <section className="band relative overflow-hidden bg-cacao text-parchment">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="kicker text-brass">On Main Street</span>
            <blockquote className="mt-6 font-display text-[clamp(1.7rem,4.2vw,3rem)] leading-[1.12] text-parchment">
              &ldquo;The people who walk in aren&apos;t shopping a catalog. They&apos;re looking
              for the <span className="disp-italic text-amber">right thing</span> for someone
              they love. We help them find it.&rdquo;
            </blockquote>
            <p className="mt-6 font-mono text-[0.72rem] tracking-[0.25em] uppercase text-parchment/55">
              The counter at A &amp; A
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-[rgba(242,235,221,0.12)] rounded-[3px] overflow-hidden border border-[rgba(242,235,221,0.12)]">
              {[
                { v: 2, suf: " in 1", label: "Fragrance and fine jewelry, one counter" },
                { v: 100, suf: "%", label: "Testers open before you buy" },
                { v: 0, suf: "", label: "Appointments needed. Just walk in." },
                { v: 1, suf: "", label: "Main Street block, City of Orange" },
              ].map((s) => (
                <div key={s.label} className="bg-cacao p-6 sm:p-7">
                  <div className="font-display text-[clamp(2rem,5vw,3rem)] text-amber leading-none">
                    <Ticker to={s.v} suffix={s.suf} />
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-snug text-parchment/65">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
