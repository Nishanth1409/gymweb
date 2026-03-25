"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#inspire", label: "Inspire" },
  { href: "#features", label: "Features" },
  { href: "#workouts", label: "Workouts" },
  { href: "#trainers", label: "Trainers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          GYMWEB
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold tracking-wide text-zinc-300 transition-all duration-300 hover:text-[#B6FF2E]"
            >
              {item.label}
            </a>
          ))}
          <Link
            href="/login"
            className="rounded-full bg-[#B6FF2E] px-5 py-2 text-sm font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(182,255,46,0.3)] transition-all duration-300 hover:scale-105"
          >
            Join Now
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
