"use client";

import { motion } from "framer-motion";

const items = [
  {
    icon: "01",
    title: "Elite Coaching",
    text: "Direct guidance from top trainers with precision progression plans.",
  },
  {
    icon: "02",
    title: "Smart Recovery",
    text: "Balance intensity, sleep, and active recovery for long-term results.",
  },
  {
    icon: "03",
    title: "Performance Data",
    text: "Track calories, heart rate, and consistency from one streamlined dashboard.",
  },
  {
    icon: "04",
    title: "Community Drive",
    text: "Stay accountable with shared goals and weekly challenge leaderboards.",
  },
];

export default function Inspire() {
  return (
    <section id="inspire" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-wide md:text-4xl">
          Daily Inspiration. Relentless Momentum.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#111] p-6 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(182,255,46,0.2)]"
            >
              <div className="inline-flex rounded-xl bg-[#1A1A1A] px-3 py-1 text-sm font-semibold text-[#B6FF2E]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-wide">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
