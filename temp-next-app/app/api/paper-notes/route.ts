import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function POST(request: Request) {
  try {
    const { studentId, examBoard, subject, paperIdentifier, notes } = await request.json();

    if (!studentId || !examBoard || !subject || !paperIdentifier || !notes) {
      return NextResponse.json({
        success: false,
        message: "Missing required fields"
      }, { status: 400 });
    }

    // Check if a paper completion record exists
    const paperCompletions = await storage.getStudentCompletedPapers(studentId);
    const existingCompletion = paperCompletions.find(p => p.paperIdentifier === paperIdentifier);

    let completion;

    if (existingCompletion) {
      // Update the existing record with notes
      completion = await storage.updatePaperCompletionNotes(existingCompletion.id, notes);
    } else {
      // Create a new paper completion record with the notes
      const pointsEarned = 5; // Small points reward for generating notes

      completion = await storage.recordPaperCompletion({
        studentId,
        examBoard,
        subject,
        paperIdentifier,
        pointsEarned,
        notes
      });

      // Update the student's points
      await storage.updateStudentPoints(studentId, pointsEarned);
    }

    return NextResponse.json({
      success: true,
      data: completion,
      message: "Paper notes saved successfully"
    });
  } catch (error) {
    console.error("Error saving paper notes:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to save paper notes"
    }, { status: 500 });
  }
}
