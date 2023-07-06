import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { AUTH_FORM_FIELDS } from "@/constants/authFormFields";
import connect from "@/utils/db";
import User from "@/models/User";

export const POST = async (request) => {
  const body = await request.json();
  const hashedPassword = await bcrypt.hash(body[AUTH_FORM_FIELDS.password], 5);
  const newUser = new User({
    ...body,
    [AUTH_FORM_FIELDS.password]: hashedPassword,
  });

  try {
    await connect();
    await newUser.save();

    return new NextResponse("User has been created", { status: 201 });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
