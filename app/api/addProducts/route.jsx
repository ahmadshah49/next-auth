import prisma from "@/app/config/prisma";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const body = await req.json();
    const data = await prisma.addProducts.create({
      data: {
        name: body.name,
        visitors: body.visitors,
        price: body.price,
        sales: body.sales,
        month: body.month,
      },
    });
    console.log("data", data);
    return NextResponse.json({ message: "Products Added Successfully" });
  } catch (error) {
    return NextResponse.json({
      message: "something Went Wronge",
      error: error.message,
    });
    console.log(error);
  }
};
