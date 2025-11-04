import { NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { insertSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const subscriberData = insertSubscriberSchema.parse(body);
    const subscriber = await storage.createSubscriber(subscriberData);
    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
      data: subscriber
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
        message: "Failed to subscribe. Please try again."
      }, { status: 500 });
    }
  }
}
