import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amazon_blue-light text-white py-6 text-center mt-10">
      <p className="text-sm">© {new Date().getFullYear()} Amazon Clone. Built for learning purposes.</p>
    </footer>
  );
}
