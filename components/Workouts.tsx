"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Strength Session",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cardio Blast",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Core Focus",
    image:
      "https://images.unsplash.com/photo-1594737625785-cf1d06a47d53?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mobility Flow",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "HIIT Burn",
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Athletic Endurance",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Workouts() {
  return (
    <section id="workouts" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">Workout Library</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={900}
                height={650}
                className="h-64 w-full object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                <span className="inline-flex rounded-full bg-[#B6FF2E] px-3 py-1 text-xs font-semibold tracking-wide text-black">
                  PROGRAM
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-wide">{card.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
