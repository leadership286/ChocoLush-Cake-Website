"use client";

import { useCartStore } from "../store/cartStore";
import Link from "next/link";
import { useEffect } from "react";

export default function ConfirmationPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  // ✅ Clear cart after confirmation
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/confirm.jpeg')" }}
    >
      <div className="bg-white/90 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          🎉 Order Confirmed!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="font-semibold text-green-700">Order ID:</p>
          <p className="text-gray-600">#ORD{Math.floor(Math.random() * 100000)}</p>
        </div>

        <Link href="/">
          <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Back to Home 🏠
          </button>
        </Link>
      </div>
    </div>
  );
}
