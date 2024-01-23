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
    if (findByEmail) {
      return NextResponse.json({ exists: true });
    } else {
      return NextResponse.json({ exists: false });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something Went Wronge",
      error: error.message,
    });
  }
}
