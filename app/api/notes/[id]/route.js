import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import { Notes } from "../../../../models/user";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await connectMongoDB();
  await Notes.findByIdAndUpdate(id, { title, description });
  console.log(title, description);
  return NextResponse.json({ message: "Note updated" }, { status: "200" });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const note = await Notes.findOne({ _id: id });
  return NextResponse.json({ note }, { status: "200" });
}
