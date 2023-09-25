"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddUserNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!title || !description) {
      setError("All fields are required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/yournotes");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex p-4 mx-2 rounded mt-6 flex-col gap-2 items-center justify-center">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-[270px] p-2 md:w-[600px]"
        type="text"
        placeholder="add title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-[270px] p-2 md:w-[600px]"
        type="text"
        placeholder="add description"
      />
      {error && <p className="error-message">{error}</p>}
      <button
        type="submit"
        className="bg-purple-500 font-bold w-[270px] md:w-[600px] rounded p-2">
        Add Note
      </button>
    </form>
  );
}
