"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const trainers = [
  {
    name: "Maya Stone",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Aiden Cole",
    role: "Conditioning Specialist",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sofia Ray",
    role: "Mobility Expert",
    image:
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">Meet The Trainers</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <motion.article
              key={trainer.name}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-all duration-300 hover:shadow-[0_0_30px_rgba(182,255,46,0.25)]"
            >
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={600}
                height={500}
                className="h-72 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold tracking-wide">{trainer.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{trainer.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
