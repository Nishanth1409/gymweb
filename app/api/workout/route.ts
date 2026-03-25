import { NextRequest } from "next/server";
import { verifyToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });

    const session = verifyToken(token);
    const workouts = await prisma.workout.findMany({
      where: { userId: session.id },
      orderBy: { performedAt: "desc" },
      take: 20,
    });

    return Response.json({ workouts });
  } catch {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) return Response.json({ error: "Unauthorized" }, { status: 401 });
    const session = verifyToken(token);

    const body = await request.json();
    const type = String(body.type ?? "").trim();
    const duration = Number(body.duration);
    const calories = Number(body.calories);
    const heartRate = body.heartRate ? Number(body.heartRate) : null;

    if (!type || Number.isNaN(duration) || Number.isNaN(calories)) {
      return Response.json({ error: "Invalid workout payload." }, { status: 400 });
    }

    const workout = await prisma.workout.create({
      data: {
        userId: session.id,
        type,
        duration,
        calories,
        heartRate,
      },
    });

    return Response.json({ workout }, { status: 201 });
  } catch {
    return Response.json({ error: "Failed to create workout." }, { status: 500 });
  }
}
