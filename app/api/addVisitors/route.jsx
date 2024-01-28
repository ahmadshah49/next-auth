import prisma from "@/app/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const data = await prisma.addVistors.create({
      data: {
        visitors: body.visitors,
        premiumVistors: body.premiumVistors,
        loaction: body.loaction,
        device: body.device,
        month: body.month,
      },
    });
    console.log("data", data);
    return NextResponse.json({ message: "Visitors Added Successfully" });
  } catch (error) {
    return NextResponse.json({
      message: "something Went Wronge",
      error: error.message,
    });
    console.log(error);
  }
};
