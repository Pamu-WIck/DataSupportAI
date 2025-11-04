import { NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { insertVideoCompletionSchema } from "@shared/schema";

export async function POST(request: Request) {
  try {
    // Validate the request body against the schema
    const body = await request.json();
    const validatedData = insertVideoCompletionSchema.parse(body);

    // Calculate points based on video watch percentage
    let pointsEarned = 25; // Base points for watching a video lesson

    // Bonus points for watching entire video
    if (typeof validatedData.watchedPercentage === 'number') {
      if (validatedData.watchedPercentage >= 95) {
        pointsEarned += 10; // Bonus for completing the entire video
      } else if (validatedData.watchedPercentage >= 75) {
        pointsEarned += 5; // Partial bonus for watching most of the video
      }
    }

    const completion = await storage.recordVideoCompletion({
      ...validatedData,
      pointsEarned
    });

    // Get updated student info
    const student = await storage.getStudent(validatedData.studentId);

    return NextResponse.json({
      success: true,
      message: "Video completion recorded successfully!",
      data: {
        completion,
        student,
        pointsEarned
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Error recording video completion:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to record video completion."
    }, { status: 500 });
  }
}
