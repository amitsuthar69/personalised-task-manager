import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import { Notes } from "../../../models/user";

export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Notes.create({ title, description });
  return NextResponse.json({ message: "Note Create." }, { status: "201" });
}

export async function GET() {
  await connectMongoDB();
  const notes = await Notes.find();
  return NextResponse.json({ notes });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Notes.findByIdAndDelete(id);
  return NextResponse.json({ message: "topic deleted" }, { status: "200" });
}
