import { NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { insertInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function GET() {
  try {
    const inquiries = await storage.getAllInquiries();
    return NextResponse.json({
      success: true,
      data: inquiries
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Failed to retrieve inquiries."
    }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const inquiryData = insertInquirySchema.parse(body);
    const inquiry = await storage.createInquiry(inquiryData);
    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully!",
      data: inquiry
    }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const validationError = fromZodError(error);
      return NextResponse.json({
        success: false,
        message: validationError.message
      }, { status: 400 });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to submit inquiry. Please try again."
      }, { status: 500 });
    }
  }
}
