import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET() {
  try {
    const allBadges = await storage.getAllBadges();
    return NextResponse.json({
      success: true,
      data: allBadges
    });
  } catch (error) {
    console.error("Error fetching badges:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch badges."
    }, { status: 500 });
  }
}
