"use client";

import { motion } from "framer-motion";

const features = [
  "Adaptive workout plans",
  "Live class scheduling",
  "Nutrition-ready insights",
  "Coach messaging tools",
  "Progress streak tracking",
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">Built For Peak Performance</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-white/10 bg-[#111] p-6 transition-all duration-300 hover:scale-105 hover:border-[#B6FF2E]/70 hover:shadow-[0_0_30px_rgba(182,255,46,0.3)]"
            >
              <p className="text-sm font-semibold tracking-wide text-[#B6FF2E]">Feature {i + 1}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-wide">{feature}</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Designed to simplify decision-making and keep your training intensity consistent.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
