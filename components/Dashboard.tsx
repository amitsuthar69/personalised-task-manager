"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1>{session?.user?.name} Welcome to TASK MANAGER</h1>
        <button onClick={() => signOut()} className="bg-red-500 rounded-md p-2">
          Dummy Log Out
        </button>
      </div>
    </div>
  );
}
