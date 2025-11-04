import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET() {
  try {
    const stats = await storage.getVideoCompletionStats();
    return NextResponse.json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error("Error fetching video completion stats:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch video completion statistics."
    }, { status: 500 });
  }
}
