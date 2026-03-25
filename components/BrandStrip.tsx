"use client";

const brands = ["PULSELAB", "FITCORE", "ALPHA X", "IRONVAULT", "ZEN ATHLETIC"];

export default function BrandStrip() {
  return (
    <section className="border-y border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-5">
        {brands.map((brand) => (
          <div
            key={brand}
            className="rounded-2xl border border-white/5 bg-[#111] py-4 text-center text-sm font-semibold tracking-[0.18em] text-zinc-500 grayscale transition-all duration-300 hover:scale-105 hover:text-zinc-200 hover:grayscale-0"
          >
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
