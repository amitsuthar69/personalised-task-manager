"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }: any) {
  const router = useRouter();
  const removeNote = async () => {
    const confirmed = confirm("Are you connfirm ?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button onClick={removeNote} className="text-red-600">
      <HiOutlineTrash size={24} />
    </button>
  );
}
