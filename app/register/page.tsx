"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Registration failed.");
        return;
      }
      router.push("/login");
    } catch {
      setError("Network error while creating account.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 py-20">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111] p-8">
        <h1 className="text-3xl font-bold tracking-wide">Create Account</h1>
        <p className="mt-2 text-sm text-zinc-400">Start your performance journey today.</p>

        <form onSubmit={onSubmit} className="mt-7 space-y-4">
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Full name"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none transition-all duration-300 focus:border-[#B6FF2E]"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none transition-all duration-300 focus:border-[#B6FF2E]"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none transition-all duration-300 focus:border-[#B6FF2E]"
          />
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#B6FF2E] py-3 font-semibold tracking-wide text-black shadow-[0_0_30px_rgba(182,255,46,0.3)] transition-all duration-300 hover:scale-105 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <p className="mt-5 text-sm text-zinc-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-[#B6FF2E]">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
