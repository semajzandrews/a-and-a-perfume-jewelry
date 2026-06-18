"use client";

export default function Hero() {
  return (
    <section id="top" className="band relative min-h-[100svh] flex items-end overflow-hidden">
      {/* warm parchment ground with a soft brass glow rising from the counter */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 78% 18%, rgba(201,138,60,0.18), transparent 55%), radial-gradient(90% 70% at 12% 90%, rgba(111,78,55,0.16), transparent 60%), var(--parchment)",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 pt-28 pb-14 sm:pb-20 grid lg:grid-cols-12 gap-10 items-end">
        {/* Left — type */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-7">
            <span className="kicker">Est. on Main St · City of Orange, NJ</span>
            <span className="hidden sm:block h-px w-12 bg-brass/60" />
          </div>

          <h1 className="font-display leading-[0.92] tracking-[-0.01em] text-cacao text-[clamp(2.9rem,9vw,6.4rem)]">
            A gift,
            <br />
            <span className="disp-italic text-coffee">composed</span> by hand.
          </h1>

          <p className="mt-7 max-w-[34rem] text-[1.02rem] leading-relaxed text-cacao/75">
            Two things people give when they mean it: a fragrance and a piece of gold.
            We keep both under one roof on Main Street and help you put them together.
            Walk in. Tell us who it&apos;s for. Leave with something they&apos;ll remember.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#notes"
              className="group inline-flex items-center gap-3 rounded-full bg-cacao px-6 py-3.5 text-[0.86rem] tracking-wide text-parchment hover:bg-cacao-2 transition-colors"
            >
              See how a gift is layered
              <span className="transition-transform group-hover:translate-y-0.5">↓</span>
            </a>
            <a href="#visit" className="ulink text-[0.86rem] tracking-wide text-cacao/80">
              Find us on Main St
            </a>
          </div>
        </div>

        {/* Right — bottle + ring composition */}
        <div className="lg:col-span-5">
          <div className="relative ml-auto w-full max-w-[420px] aspect-[4/5]">
            <div className="absolute inset-0 rounded-[2px] overflow-hidden warm-vignette ring-1 ring-[var(--rule-2)] shadow-[0_30px_80px_-30px_rgba(58,42,30,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop"
                alt="Amber perfume bottle resting on warm linen"
                className="h-full w-full object-cover drift"
                loading="eager"
              />
            </div>
            {/* small inset jewelry chip — paired adornment */}
            <div className="absolute -bottom-6 -left-6 w-[42%] aspect-square rounded-[2px] overflow-hidden ring-1 ring-[var(--rule-2)] shadow-[0_20px_50px_-20px_rgba(58,42,30,0.55)] hidden sm:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop"
                alt="Gold ring detail"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -top-4 right-3 kicker text-coffee/80 [writing-mode:vertical-rl] rotate-180 hidden sm:block">
              fragrance · adornment
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cacao/50">
        <span className="kicker text-[0.55rem]">scroll</span>
        <span className="h-8 w-px bg-cacao/30" />
      </div>
    </section>
  );
}
