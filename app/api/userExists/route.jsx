import prisma from "@/app/config/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const findByEmail = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return NextResponse.json({ message: "user Already Exists" });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went Wronge",
      error: error.message,
    });
  }
}
