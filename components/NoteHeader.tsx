import Link from "next/link";

export default function TaskHeader() {
  return (
    <nav className="bg-gray-400 mx-4 my-4 p-2 flex justify-between items-center">
      <Link href={"/yournotes"} className="text-xl">
        Make Notes
      </Link>
      <Link className="p-1 rounded-md border-2 border-gray-100" href="/addnote">
        Add Note
      </Link>
    </nav>
  );
}
