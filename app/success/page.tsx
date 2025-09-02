"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 to-yellow-100 p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-lg mb-4">
          Your order has been placed successfully at <span className="font-semibold">ChocoLush</span> 🍫🎂
        </p>
        <p className="text-gray-600 mb-6">
          Your yummy cakes are on the way 🚚✨
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
        >
          Continue Shopping 🛒
        </Link>
      </div>
    </div>
  );
}
