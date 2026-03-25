"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {
  defaultWorkoutType: string;
};

export default function DashboardActions({ defaultWorkoutType }: Props) {
  const router = useRouter();
  const [type, setType] = useState(defaultWorkoutType);
  const [duration, setDuration] = useState("45");
  const [calories, setCalories] = useState("500");
  const [heartRate, setHeartRate] = useState("96");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/workout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          duration: Number(duration),
          calories: Number(calories),
          heartRate: Number(heartRate),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error ?? "Unable to add workout.");
        return;
      }
      router.refresh();
    } catch {
      setError("Network error while creating workout.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-white/10 bg-[#111] p-6 shadow-[0_0_30px_rgba(182,255,46,0.12)]"
      >
        <h2 className="text-xl font-semibold tracking-wide">Log Workout</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <input
            value={type}
            onChange={(event) => setType(event.target.value)}
            placeholder="Workout type"
            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#B6FF2E]"
          />
          <input
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            placeholder="Duration (min)"
            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#B6FF2E]"
          />
          <input
            value={calories}
            onChange={(event) => setCalories(event.target.value)}
            placeholder="Calories"
            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#B6FF2E]"
          />
          <input
            value={heartRate}
            onChange={(event) => setHeartRate(event.target.value)}
            placeholder="Heart rate"
            className="rounded-2xl border border-white/10 bg-black px-4 py-3 outline-none focus:border-[#B6FF2E]"
          />
        </div>
        {error ? <p className="mt-3 text-sm text-red-400">{error}</p> : null}
        <button
          type="submit"
          disabled={loading}
          className="mt-4 rounded-full bg-[#B6FF2E] px-6 py-3 font-semibold tracking-wide text-black transition-all duration-300 hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Add Workout"}
        </button>
      </form>

      <button
        onClick={handleLogout}
        className="h-fit rounded-full border border-[#B6FF2E]/70 px-6 py-3 font-semibold tracking-wide text-[#B6FF2E] transition-all duration-300 hover:scale-105 hover:bg-[#B6FF2E] hover:text-black"
      >
        Logout
      </button>
    </div>
  );
}
