import React from "react";

export default function Cart() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="bg-white shadow p-4 rounded">
        <p className="text-gray-600">Your cart is empty.</p>
      </div>
    </div>
  );
}
