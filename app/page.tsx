"use client";

export default function HomePage() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/land.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 md:pt-56">
        <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg text-yellow-400">
          Indulge in <span className="text-yellow-400">Chocolate Bliss</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white">
          Welcome to <span className="font-semibold">ChocoLush</span> – where
          every slice melts hearts. Freshly baked cakes, cupcakes, and brownies
          made with love 🍰.
        </p>
        <a href="/menu">
          <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-2xl shadow-md hover:bg-cyan-300 transition-all">
            Explore Menu
          </button>
        </a>
      </div>
    </section>
  );
}
