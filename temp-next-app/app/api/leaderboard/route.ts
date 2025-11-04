import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET() {
  try {
    const topStudents = await storage.getTopStudents(10);
    return NextResponse.json({
      success: true,
      data: topStudents.map(student => ({
        id: student.id,
        name: student.name,
        totalPoints: student.totalPoints,
        streak: student.streak,
        avatarUrl: student.avatarUrl
      }))
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch leaderboard."
    }, { status: 500 });
  }
}
