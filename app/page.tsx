import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Welcome() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      {/* <div className="text-gray-100 text-xl shadow-xl shadow-purple-600/25 border border-purple-500 bg-[#3400B3] dark:bg-[#BB86FC] text-center p-3 w-2/3 rounded-md">
        Welcome to a Personalised Task Manager developed by Amit Suthar.
      </div> */}
      <LoginForm />
    </main>
  );
}
