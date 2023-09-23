"use client";

import Credentials from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res && res.error) {
        setError("Invalid Credentials");
        // console.log(res);
        // console.log(res.error);
        // console.log(Credentials);
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-gray-200 shadow-lg p-5 rounded-lg border-t-4 border-purple-500 dark-scheme">
        <h1 className="text-purple-500 text-lg font-bold mb-2">
          Enter your credentials
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button className="bg-purple-500 py-1 rounded">Login</button>
          <div className="text-right md:flex justify-between items-center">
            {error && <div className="error-message">{error}</div>}
            <Link className="text-xs" href="/register">
              Don't have an account? <span className="underline">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
