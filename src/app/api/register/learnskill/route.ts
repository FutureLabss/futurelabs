import User from "@/models/UserSchema";
import connectMongoDb from "@/utils/Mongoose";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

  try {
    await connectMongoDb();


    const { email, ...rest } = await request.json();


    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ message: "User already registered ", status: 400, success: false });

    }
    const newUser = new User({ email, ...rest });

    await newUser.save();


    return NextResponse.json({ message: "success", status: 200, success: true, data: newUser });

  } catch (error) {

    console.error("Error during user registration:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });


  }
}