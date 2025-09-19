import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[80vh] bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Sign in</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
          />
          <button className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500">
            Sign in
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          New to Amazon? <span className="text-blue-600 cursor-pointer">Create your account</span>
        </p>
      </div>
    </div>
  );
}
