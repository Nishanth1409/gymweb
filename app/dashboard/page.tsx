import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DashboardActions from "./DashboardActions";
import { verifyToken } from "@/lib/auth";
import { getPrismaClient } from "@/lib/prisma";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  let session: { id: string; email: string; name: string };
  try {
    session = verifyToken(token);
  } catch {
    redirect("/login");
  }

  const prisma = getPrismaClient();
  const workouts = await prisma.workout.findMany({
    where: { userId: session.id },
    orderBy: { performedAt: "desc" },
    take: 6,
  });

  type WorkoutTotals = {
    calories: number;
    duration: number;
    heartRateTotal: number;
    heartRateCount: number;
  };

  const totals = workouts.reduce<WorkoutTotals>(
    (acc: WorkoutTotals, workout: (typeof workouts)[number]) => {
      acc.calories += workout.calories;
      acc.duration += workout.duration;
      if (workout.heartRate) {
        acc.heartRateTotal += workout.heartRate;
        acc.heartRateCount += 1;
      }
      return acc;
    },
    { calories: 0, duration: 0, heartRateTotal: 0, heartRateCount: 0 }
  );

  const avgHeartRate =
    totals.heartRateCount > 0 ? Math.round(totals.heartRateTotal / totals.heartRateCount) : 98;

  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold tracking-wide md:text-5xl">Welcome, {session.name}</h1>
        <p className="mt-3 text-zinc-400">Your training command center is now active.</p>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
            <p className="text-sm text-zinc-400">Calories Burned</p>
            <p className="mt-2 text-3xl font-bold tracking-wide text-[#B6FF2E]">
              {totals.calories || 2200} kcal
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
            <p className="text-sm text-zinc-400">Workout Time</p>
            <p className="mt-2 text-3xl font-bold tracking-wide text-[#B6FF2E]">
              {totals.duration || 90} min
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#111] p-6">
            <p className="text-sm text-zinc-400">Average Heart Rate</p>
            <p className="mt-2 text-3xl font-bold tracking-wide text-[#B6FF2E]">{avgHeartRate} bpm</p>
          </div>
        </section>

        <section className="mt-10">
          <DashboardActions defaultWorkoutType="Strength Session" />
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-[#111] p-6">
          <h2 className="text-xl font-semibold tracking-wide">Recent Workouts</h2>
          {workouts.length === 0 ? (
            <p className="mt-3 text-zinc-400">No workouts yet. Add your first session above.</p>
          ) : (
            <div className="mt-5 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-zinc-400">
                  <tr>
                    <th className="pb-3">Type</th>
                    <th className="pb-3">Duration</th>
                    <th className="pb-3">Calories</th>
                    <th className="pb-3">Heart Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.map((workout: (typeof workouts)[number]) => (
                    <tr key={workout.id} className="border-t border-white/10">
                      <td className="py-3">{workout.type}</td>
                      <td className="py-3">{workout.duration} min</td>
                      <td className="py-3">{workout.calories} kcal</td>
                      <td className="py-3">{workout.heartRate ?? "--"} bpm</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
