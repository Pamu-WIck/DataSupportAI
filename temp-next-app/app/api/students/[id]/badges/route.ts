import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const studentId = parseInt(params.id);
    const badges = await storage.getStudentBadges(studentId);
    return NextResponse.json({
      success: true,
      data: badges
    });
  } catch (error) {
    console.error("Error fetching student badges:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch student badges."
    }, { status: 500 });
  }
}
