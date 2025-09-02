// app/components/Cart.tsx
"use client";

import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  if (cartItems.length === 0) return <p>Your cart is empty 🛒</p>;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 border-b pb-2"
        >
          <div className="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Price: Rs {item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total Price */}
      <p className="mt-4 font-bold">Total: Rs {total}</p>

      {/* Checkout Button */}
      <div className="mt-6">
        <Link href="/checkout">
          <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
