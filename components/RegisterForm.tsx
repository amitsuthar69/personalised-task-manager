"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessory");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User Already Exists!");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("regi failed");
      }
    } catch (error) {
      console.log("error during registeration", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-gray-200 shadow-lg p-5 rounded-lg border-t-4 border-purple-500 dark-scheme">
        <h1 className="text-purple-500 text-lg font-bold mb-2">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="full name"
          />
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
          <button className="bg-purple-500 py-1 rounded">Register</button>
          <div className="text-right md:flex justify-between items-center">
            {error && <div className="error-message">{error}</div>}
            <Link className="text-xs" href="/">
              Already have an account? <span className="underline">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
