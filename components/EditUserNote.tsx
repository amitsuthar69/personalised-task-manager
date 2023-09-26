"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditUserNote({ id, title, description }: any) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescri, setNewDescri] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescri }),
      });
      console.log(newTitle, newDescri); // check 1
      console.log(res); // check 2
      if (!res.ok) {
        throw new Error("Error updating notes");
      }
      router.push("/yournotes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex p-4 mx-2 rounded mt-6 flex-col gap-2 items-center justify-center">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="w-[270px] p-2 md:w-[600px]"
        type="text"
        placeholder="add title"
      />
      <input
        onChange={(e) => setNewDescri(e.target.value)}
        value={newDescri}
        className="w-[270px] p-2 md:w-[600px]"
        type="text"
        placeholder="add description"
      />
      <button
        onClick={handleSubmit}
        className="bg-purple-500 font-bold w-[270px] md:w-[600px] rounded p-2">
        Update Note
      </button>
    </form>
  );
}
