"use client";

import { useCartStore } from "../store/cartStore";
import Link from "next/link";

export default function CheckoutPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  // ✅ Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/checkout.jpeg')" }} // ✅ Background image
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">Checkout</h1>

        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty 🛒</p>
        ) : (
          <>
            {/* ✅ Order Summary */}
            <div className="bg-pink-50 p-4 rounded-lg mb-6 text-left">
              <p className="font-semibold mb-2">Order Summary:</p>
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>Rs. {item.price * item.quantity}</span>
                </div>
              ))}

              <hr className="my-2" />
              <p className="mt-2 font-bold flex justify-between">
                <span>Total:</span>
                <span>Rs. {total}</span>
              </p>
            </div>

            {/* ✅ Payment Button */}
            <Link href="/payment">
              <button className="w-full py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                Proceed to Pay 💳
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
