import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";



export async function POST(req) {
  const { fullname, business, email, service, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ fullname, business, email, service, message });

    return NextResponse.json({
      msg: ["Contacto enviado correctamente 😉"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}