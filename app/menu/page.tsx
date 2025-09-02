"use client";
import { useCartStore } from "@/app/store/cartStore";

export default function MenuPage() {
  const addToCart = useCartStore((state) => state.addToCart);

  const items = [
    { id: 1, name: "Classic Chocolate Cake", image: "/cake1.jpeg", price: 1200 },
    { id: 2, name: "Strawberry Topping Cake", image: "/cake2.jpeg", price: 1500 },
    { id: 3, name: "Choco Lava Cake", image: "/cake5.jpeg", price: 1800 },
    { id: 4, name: "Mango Layer Cake", image: "/cake4.jpeg", price: 1300 },
    { id: 5, name: "Vanilla Strawberry Cake", image: "/cake3.jpeg", price: 1400 },
    { id: 6, name: "Pineapple Cake", image: "/cake6.jpeg", price: 1250 },
    { id: 7, name: "Red Velvet Cake", image: "/cake7.jpeg", price: 2000 },
    { id: 8, name: "Rainbow Sprinkle Cake", image: "/cake8.jpeg", price: 1100 },
      { "id": 9, "name": "Black Forest Fantasy", "image": "/cake9.jpeg", "price": 1600 },
  { "id": 10, "name": "Pineapple Paradise", "image": "/cake10.jpeg", "price": 1350 },
  { "id": 11, "name": "Mango Mellow Cake", "image": "/cake11.jpeg", "price": 1500 },
  { "id": 12, "name": "Ferrero Rocher Cake", "image": "/cake12.jpeg", "price": 2200 },
  { "id": 13, "name": "Blueberry Bliss Cake", "image": "/cake13.jpeg", "price": 1700 },
  { "id": 14, "name": "Nutella Hazelnut Cake", "image": "/cake14.jpeg", "price": 2000 },
  { "id": 15, "name": "Coconut Snow Cake", "image": "/cake15.jpeg", "price": 1400 },
  { "id": 16, "name": "Coffee Mocha Cake", "image": "/cake16.jpeg", "price": 1800 },
  { "id": 17, "name": "KitKat Crunch Cake", "image": "/cake17.jpeg", "price": 1900 },
  { "id": 18, "name": "Strawberry Dream Cake", "image": "/cake18.jpeg", "price": 1600 },
  { "id": 19, "name": "Lotus Biscoff Cake", "image": "/cake19.jpeg", "price": 2100 },
   { "id": 20, "name": "Rainbow Unicorn Cake", "image": "/cake20.jpeg", "price": 2500 },
   { "id": 23, "name": "Red Velvet Cupcake", "image": "/cup1.jpeg", "price": 350 },
{ "id": 24, "name": "Chocolate Fudge Cupcake", "image": "/cup2.jpeg", "price": 380 },
{ "id": 25, "name": "Vanilla Sprinkle Cupcake", "image": "/cup3.jpeg", "price": 300 },
{ "id": 26, "name": "Oreo Delight Cupcake", "image": "/cup4.jpeg", "price": 400 },
{ "id": 27, "name": "Strawberry Swirl Cupcake", "image": "/cup5.jpeg", "price": 360 },
{ "id": 28, "name": "Lemon Zest Cupcake", "image": "/cup6.jpeg", "price": 320 },
{ "id": 29, "name": "Peanut Butter Cupcake", "image": "/cup7.jpeg", "price": 420 },
{ "id": 30, "name": "Caramel Crunch Cupcake", "image": "/cup8.jpeg", "price": 400 },
{ "id": 31, "name": "Blueberry Burst Cupcake", "image": "/cup9.jpeg", "price": 370 },
{ "id": 32, "name": "Rainbow Surprise Cupcake", "image": "/cup10.jpeg", "price": 450 },
{ "id": 33, "name": "Mocha Espresso Cupcake", "image": "/cup11.jpeg", "price": 390 },
{ "id": 34, "name": "Pistachio Rose Cupcake", "image": "/cup12.jpeg", "price": 430 },
{ "id": 35, "name": "Classic Fudgy Brownie", "image": "/b1.jpeg", "price": 250 },
{ "id": 36, "name": "Walnut Chocolate Brownie", "image": "/b2.jpeg", "price": 280 },
{ "id": 37, "name": "Caramel Swirl Brownie", "image": "/b3.jpeg", "price": 300 },
{ "id": 38, "name": "Nutella Stuffed Brownie", "image": "/b4.jpeg", "price": 320 },
{ "id": 39, "name": "White Chocolate Macadamia Brownie", "image": "/b5.jpeg", "price": 350 },
{ "id": 40, "name": "Strawberry Cheesecake Brownie", "image": "/b6.jpeg", "price": 370 },
{ "id": 41, "name": "Peanut Butter Brownie", "image": "/b7.jpeg", "price": 300 },
{ "id": 42, "name": "Mocha Espresso Brownie", "image": "/b8.jpeg", "price": 320 },
{ "id": 43, "name": "Double Chocolate Chip Brownie", "image": "/b9.jpeg", "price": 350 },
{ "id": 44, "name": "Coconut Delight Brownie", "image": "/b10.jpeg", "price": 330 },
{ "id": 45, "name": "KitKat Brownie", "image": "/b11.jpeg", "price": 360 },
{ "id": 46, "name": "Oreo Cheesecake Brownie", "image": "/b12.jpeg", "price": 400 },
{ "id": 47, "name": "Chocolate Hazelnut Truffle Cake", "image": "/e1.jpeg", "price": 2200 },
{ "id": 48, "name": "Red Velvet Cheesecake", "image": "/e2.jpeg", "price": 2300 },
{ "id": 49, "name": "Caramel Pecan Brownie", "image": "/e12.jpeg", "price": 1800 },
{ "id": 50, "name": "Salted Caramel Crunch Cake", "image": "/e4.jpeg", "price": 2000 },
{ "id": 51, "name": "Choco Mint Cupcake", "image": "/e5.jpeg", "price": 400 },
{ "id": 52, "name": "Birthday Confetti Cupcake", "image": "/e6.jpeg", "price": 420 },
{ "id": 53, "name": "Triple Chocolate Brownie", "image": "/e7.jpeg", "price": 380 },
{ "id": 54, "name": "Choco Lava Mug Cake", "image": "/e8.jpeg", "price": 300 },
{ "id": 55, "name": "Chocolate Mousse Cup", "image": "/e9.jpeg", "price": 350 },
{ "id": 56, "name": "Mini Cheesecake Jar", "image": "/e10.jpeg", "price": 380 },
{ "id": 57, "name": "Nutty Banana Cake", "image": "/e11.jpeg", "price": 1800 },
{ "id": 58, "name": "Mango Cream Dream Cake", "image": "/e3.jpeg", "price": 400 }



  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/menu.jpeg')" }}
    >
      <h1 className="text-4xl font-bold text-center text-black mb-10 mt-10">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white/90 rounded-2xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {item.name}
            </h2>
            <p className="text-black font-medium mb-3">Rs. {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transform transition duration-400"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
