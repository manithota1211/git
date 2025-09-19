import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <p className="text-gray-700">You are viewing details for product ID: {id}</p>
      <button className="mt-4 bg-yellow-400 px-4 py-2 rounded font-bold text-black hover:bg-yellow-500">
        Add to Cart
      </button>
    </div>
  );
}
