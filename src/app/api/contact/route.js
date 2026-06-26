import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, serviceInterest } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields (Name, Email, Message)" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Persist lead to file-backed database
    const savedLead = db.saveLead({
      name,
      email,
      company: company || "N/A",
      phone: phone || "N/A",
      message,
      service_interest: serviceInterest || "General Inquiry"
    });

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
      leadId: savedLead.id
    });

  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred while processing lead" },
      { status: 500 }
    );
  }
}
