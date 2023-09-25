import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getNotes = async () => {
  try {
    const noteRes = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });

    if (!noteRes.ok) {
      throw new Error("Failed to fetch Notes");
    }
    return noteRes.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
};

export default async function UserTasks() {
  const { notes } = await getNotes();

  return (
    <>
      {notes.map((note) => (
        <div
          key={note._id}
          className="mx-4 md:mx-16 my-4 p-2 flex justify-between border border-r-slate-300">
          <div>
            <h2 className="text-2xl font-semibold">{note.title}</h2>
            <p>{note.description}</p>
          </div>
          <div className="flex gap-2 items-start">
            <RemoveBtn id={note._id} />
            <Link href={`/editNote/${note._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
