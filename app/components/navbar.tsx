"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/app/store/cartStore";
import Cart from "./Cart";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const cartItems = useCartStore((state) => state.cartItems);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">
          🍫 ChocoLush
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-medium drop-shadow-lg">
          <li className="hover:text-yellow-400 hover:underline transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-yellow-400 hover:underline transition">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="hover:text-yellow-400 hover:underline transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-yellow-400 hover:underline transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Side (Cart + Auth) */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <div className="relative hidden md:block">
            <button
              className="text-white hover:text-yellow-400 transition"
              onClick={() => setCartOpen(!cartOpen)}
            >
              🛒
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white text-black shadow-lg rounded p-4 z-50">
                <Cart />
              </div>
            )}
          </div>

          {/* Clerk Auth */}
          <SignedOut>
            <SignInButton>
              <button className="bg-yellow-500 text-black font-semibold px-3 py-1 rounded hover:bg-yellow-400 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="bg-orange-500 text-white font-semibold px-3 py-1 rounded hover:bg-orange-600 transition">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 px-6 py-4 space-y-4">
          <Link
            href="/"
            className="block text-white hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="block text-white hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-yellow-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Cart (Mobile) */}
          <div className="relative">
            <button
              className="text-white hover:text-yellow-400 transition"
              onClick={() => setCartOpen(!cartOpen)}
            >
              🛒
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-black shadow-lg rounded p-4 z-50">
                <Cart />
              </div>
            )}
          </div>

          {/* Clerk Auth (Mobile) */}
          <SignedOut>
            <div className="space-y-2">
              <SignInButton>
                <button className="w-full bg-yellow-500 text-black font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full bg-orange-500 text-white font-semibold px-3 py-2 rounded hover:bg-orange-600 transition">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </nav>
  );
}
