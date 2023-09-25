import Link from "next/link";

export default function DropDownMenu() {
  return (
    <ul className="flex flex-col gap-3 p-4 text-lg drop-shadow-lg dark:text-gray-100 text-blue-700 bg-blue-50 dark:bg-[#1F1B24] ">
      <Link className="bottom-border" href="/">
        Profile
      </Link>
      <Link className="bottom-border" href="/yournotes">
        Your Tasks
      </Link>
      <Link className="bottom-border" href="https://github.com/amitsuthar69">
        Contribute
      </Link>
      <Link className="bottom-border" href="/register">
        Sign In
      </Link>
    </ul>
  );
}
