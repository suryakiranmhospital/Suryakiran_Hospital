"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MapPin, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Doctors", href: "/#doctors" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg shadow-orange-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/logoo.png"
                  alt="Suryakiran Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                <Heart className="w-2 h-2 text-white fill-current" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-montserrat font-bold text-xl text-trust-maroon">
                Suryakiran
              </span>
              <p className="text-xs text-orange-600 -mt-1">Multispecialty Hospital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-trust-brown font-medium hover:text-orange-600 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium hover:from-red-500 hover:to-orange-400 transition-all duration-300"
            >
              Login
            </Link>

            <a
              href="tel:+912249634780"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-heal-50 text-heal-600 font-medium hover:bg-heal-100 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-trust-brown" />
              ) : (
                <Menu className="w-6 h-6 text-trust-brown" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-orange-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-trust-brown font-medium hover:bg-orange-50 hover:text-orange-600 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-gradient-to-r from-red-600 to-orange-500 text-white font-medium"
              >
                Login
              </Link>
              <div className="pt-4 border-t border-orange-100">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-orange-50">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-trust-brown">
                    Kandivali East, Mumbai-400101
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}