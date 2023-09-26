import EditUserNote from "@/components/EditUserNote";
import NoteHeader from "@/components/NoteHeader";

const getNoteById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error fetching notes");
    }

    const note = await res.json();
    return note;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default async function EditNote({ params }) {
  const { id } = params;
  const note = await getNoteById(id);
  console.log("id: ", id); // gives id
  if (!note) {
    throw new Error("ID NOT FOUND");
  }

  const { title, description } = note;
  // console.log(title, description); // undefined undefined
  return (
    <>
      <NoteHeader />
      <EditUserNote id={id} title={title} description={description} />
    </>
  );
}
