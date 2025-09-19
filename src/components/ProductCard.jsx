import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={product.img}
        alt={product.name}
        className="h-48 w-full object-contain mb-3"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.desc}</p>
      <div className="mt-3">
        <span className="text-xl font-bold text-red-600">{product.price}</span>
      </div>
      <div className="mt-3 flex gap-2">
        <Link
          to={`/products/${product.id}`}
          className="flex-1 bg-yellow-400 text-black px-3 py-2 text-center rounded hover:bg-yellow-500 font-medium"
        >
          View
        </Link>
        <button className="flex-1 bg-amazon_blue text-white px-3 py-2 rounded hover:opacity-90">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
