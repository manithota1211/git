import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-amazon_blue text-white p-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-tight">
        amazon<span className="text-yellow-400">.clone</span>
      </Link>

      {/* Search */}
      <div className="hidden sm:flex flex-1 mx-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-l-md focus:outline-none text-black"
        />
        <button className="bg-yellow-400 px-4 py-2 rounded-r-md font-semibold text-black hover:bg-yellow-500">
          Search
        </button>
      </div>

      {/* Nav links */}
      <div className="flex items-center gap-6 text-sm">
        <Link to="/login" className="hover:underline">
          Hello, Sign in<br /> <span className="font-bold">Account & Lists</span>
        </Link>
        <Link to="/cart" className="flex items-center gap-1 hover:underline">
          <ShoppingCart className="w-6 h-6" />
          <span className="font-bold">Cart</span>
        </Link>
      </div>
    </nav>
  );
}
