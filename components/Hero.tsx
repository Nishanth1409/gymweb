"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const floating = {
  animate: { y: [0, -10, 0] },
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" as const },
};

export default function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute h-[600px] w-[600px] rounded-full bg-[#B6FF2E] opacity-20 blur-[150px]" />

      <p className="z-10 mb-5 text-sm tracking-[0.25em] text-zinc-400">
        PREMIUM FITNESS EXPERIENCE
      </p>

      <h1 className="z-10 text-5xl font-bold leading-tight tracking-wide md:text-7xl">
        Sculpt Your Body <br />
        <span className="text-[#B6FF2E]">Elevate Your Spirit</span>
      </h1>

      <p className="z-10 mt-5 max-w-2xl text-sm text-zinc-300 md:text-base">
        Train harder with data-driven programs, elite coaching, and a premium platform crafted for
        next-level performance.
      </p>

      <motion.img
        src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1100&q=80"
        alt="Athlete training"
        className="z-10 mt-10 w-[320px] rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(182,255,46,0.3)] md:w-[520px]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[8%] top-[42%] hidden rounded-2xl border border-white/10 bg-[#111] p-4 text-left shadow-[0_0_30px_rgba(182,255,46,0.15)] md:block"
        {...floating}
      >
        <p className="text-xs text-zinc-400">Calories</p>
        <p className="font-semibold tracking-wide">1,200 kcal</p>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[53%] hidden rounded-2xl border border-white/10 bg-[#111] p-4 text-left shadow-[0_0_30px_rgba(182,255,46,0.15)] md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
      >
        <p className="text-xs text-zinc-400">Heart Rate</p>
        <p className="font-semibold tracking-wide">98 bpm</p>
      </motion.div>

      <motion.div
        className="absolute right-[16%] top-[30%] hidden rounded-2xl border border-white/10 bg-[#1A1A1A] p-4 text-left shadow-[0_0_30px_rgba(182,255,46,0.15)] lg:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
      >
        <p className="text-xs text-zinc-400">Training Stats</p>
        <p className="font-semibold tracking-wide">6 sessions / week</p>
      </motion.div>

      <Link
        href="/register"
        className="z-10 mt-8 rounded-full bg-[#B6FF2E] px-8 py-3 font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(182,255,46,0.3)] transition-all duration-300 hover:scale-105"
      >
        Start Now -
      </Link>
    </section>
  );
}
