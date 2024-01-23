import prisma from "@/app/config/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export const POST = async (req) => {
  try {
    const body = await req.json();
    const hashed = await bcrypt.hash(body.password, 10);
    const data = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashed,
      },
    });
    return NextResponse.json({ message: "account created" });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};
