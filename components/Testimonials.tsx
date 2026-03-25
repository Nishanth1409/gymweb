"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quotes = [
  {
    name: "Daniel K.",
    text: "The structure and coaching changed my consistency. I am stronger than ever.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Naomi R.",
    text: "I love the clean dashboard and weekly progress views. It keeps me focused.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Victor L.",
    text: "The workout library plus tracker gave me clear direction every single day.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-wide md:text-4xl">Real Member Stories</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((quote, i) => (
            <motion.blockquote
              key={quote.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-white/10 bg-[#111] p-6"
            >
              <p className="text-zinc-300">&ldquo;{quote.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src={quote.image}
                  alt={quote.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <cite className="text-sm not-italic font-semibold tracking-wide">{quote.name}</cite>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
