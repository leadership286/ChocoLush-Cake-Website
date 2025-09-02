import { Cake, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#4b2e2e]/95 to-[#2e1b1b]/95 text-white px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/ab.jpeg')" }} 
    >
      <div className="max-w-5xl mx-auto text-center backdrop-blur-sm bg-black/40 p-8 rounded-2xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-[#facc15]">ChocoLush</span>
        </h1>
        <p className="text-lg text-white leading-relaxed mb-12">
          At ChocoLush, we believe every celebration deserves a touch of sweetness. 
          From rich chocolate cakes to delightful custom designs, our passion lies in 
          creating desserts that bring smiles and unforgettable moments.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Cake */}
          <div className="bg-[#3d2525]/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Cake 
              className="mx-auto mb-4 text-pink-400 fill-pink-400" 
              size={52} 
            />
            <h3 className="text-xl font-semibold mb-2">Freshly Baked</h3>
            <p className="text-gray-300">
              Every cake is baked fresh with premium ingredients for the perfect taste.
            </p>
          </div>

          {/* Heart */}
          <div className="bg-[#3d2525]/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Heart 
              className="mx-auto mb-4 text-red-500 fill-red-500" 
              size={52} 
            />
            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
            <p className="text-gray-300">
              Our bakers pour love and creativity into every design to make it unique.
            </p>
          </div>

          {/* Award */}
          <div className="bg-[#3d2525]/90 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <Award 
              className="mx-auto mb-4 text-yellow-400 fill-yellow-400" 
              size={52} 
            />
            <h3 className="text-xl font-semibold mb-2">Trusted Quality</h3>
            <p className="text-gray-300">
              We maintain the highest standards of hygiene, quality, and taste.
            </p>
          </div>
        </div>

        {/* Footer text */}
        <div className="mt-16">
          <p className="text-lg italic text-white">
            "ChocoLush – Where every bite is pure bliss 🍫✨"
          </p>
        </div>
      </div>
    </div>
  );
}
