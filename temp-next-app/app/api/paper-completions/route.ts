import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function POST(request: Request) {
  try {
    const completionData = await request.json();

    // Calculate points based on paper difficulty and score
    let pointsEarned = 10; // Base points

    if (completionData.score && completionData.maxScore) {
      const scorePercentage = (completionData.score / completionData.maxScore) * 100;
      if (scorePercentage >= 90) pointsEarned += 15;
      else if (scorePercentage >= 75) pointsEarned += 10;
      else if (scorePercentage >= 60) pointsEarned += 5;
    }

    // Bonus points for A-level papers
    if (completionData.examBoard.includes('alevel')) {
      pointsEarned += 5;
    }

    const completion = await storage.recordPaperCompletion({
      ...completionData,
      pointsEarned
    });

    // Get updated student info
    const student = await storage.getStudent(completionData.studentId);

    return NextResponse.json({
      success: true,
      message: "Paper completion recorded successfully!",
      data: {
        completion,
        student,
        pointsEarned
      }
    }, { status: 201 });
  } catch (error) {
    console.error("Error recording paper completion:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to record paper completion."
    }, { status: 500 });
  }
}
