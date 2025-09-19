import React from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Echo Dot (4th Gen)",
      desc: "Smart speaker with Alexa",
      price: "₹4,499",
      img: "https://m.media-amazon.com/images/I/61mb1U4jA2L._AC_UL320_.jpg",
    },
    {
      id: 2,
      name: "Fire TV Stick",
      desc: "Streaming media player",
      price: "₹3,999",
      img: "https://m.media-amazon.com/images/I/61CgY-8BX+L._AC_UL320_.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
