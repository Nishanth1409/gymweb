"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
          alt="Athlete in training"
          className="h-full min-h-[340px] w-full rounded-3xl object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid gap-5"
        >
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold tracking-wide text-[#B6FF2E]">Live Metrics</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-wide">Heart recovery in real time</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Monitor effort and adapt intensity with instant feedback from every session.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold tracking-wide text-[#B6FF2E]">Coach Console</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-wide">Personalized weekly plans</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Adjust macro goals, workouts, and rest windows with a single control center.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
