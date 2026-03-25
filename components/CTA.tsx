"use client";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[28px] bg-[#B6FF2E] p-8 text-black md:p-12">
          <p className="text-sm font-semibold tracking-[0.2em]">JOIN THE MOVEMENT</p>
          <h2 className="mt-3 text-3xl font-bold tracking-wide md:text-5xl">
            Build your strongest version now.
          </h2>
          <div className="mt-7 flex flex-col gap-3 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-black/20 bg-white px-6 py-3 outline-none"
            />
            <button className="rounded-full bg-black px-8 py-3 font-semibold tracking-wide text-[#B6FF2E] transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
