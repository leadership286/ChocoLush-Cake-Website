"use client";

import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const handlePayment = () => {
    // yahan koi real integration nahi hai, sirf redirect karenge
    setTimeout(() => {
      router.push("/confirmation");
    }, 2000); // 2 sec ke baad confirmation page
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/payment.jpeg')" }}
    >
      <div className="bg-white/90 p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Gateway</h1>
        <p className="mb-4">Click below to simulate payment</p>
        <button
          onClick={handlePayment}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Pay Now 💳
        </button>
      </div>
    </div>
  );
}
