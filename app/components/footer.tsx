"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 to-cyan-300 ">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8 text-gray-700">
        
        {/* About section */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-pink-700">ChocLush</h2>
          <p className="text-sm leading-relaxed">
            Indulge in our handcrafted cakes baked with love and premium 
            ingredients. Perfect for every celebration. 🎂✨
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-pink-700">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-600">Home</a></li>
            <li><a href="/menu" className="hover:text-pink-600">Menu</a></li>
            <li><a href="/checkout" className="hover:text-pink-600">Checkout</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-pink-700">Contact Us</h2>
          <p className="text-sm">📍 Karachi, Pakistan</p>
          <p className="text-sm">📞 +92 300 1234567</p>
          <p className="text-sm">✉️ info@choclush.com</p>
        </div>
      </div>

      {/* Bottom credit line */}
      <div className="border-t border-pink-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} ChocLush | Developed & Designed by{" "}
        <span className="font-medium text-pink-700">Rimsha Ansari 💻</span>
      </div>
    </footer>
  );
}
