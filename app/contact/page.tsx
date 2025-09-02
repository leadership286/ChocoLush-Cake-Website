export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/cb.jpeg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto px-6 py-16">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Contact <span className="text-yellow-400">ChocoLush</span>
        </h1>
        <p className="text-lg text-center text-gray-200 mb-12">
          Have a question or want to place a custom order?  
          We&apos;d love to hear from you! 🎂✨
        </p>

        {/* Contact Form */}
        <div className="bg-black/30 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto border border-white/20">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300 font-medium" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Extra Info */}
        <div className="mt-12 text-center space-y-2 text-gray-200">
          <p>📍 Karachi, Pakistan</p>
          <p>📧 support@chocolush.com</p>
          <p>📞 +92 300 1234567</p>
        </div>
      </div>
    </div>
  );
}
