"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
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
          ? "bg-white/80 backdrop-blur-md shadow-lg shadow-teal-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <span className="font-montserrat font-bold text-xl text-slate-800">
                Suryakiran
              </span>
              <p className="text-xs text-teal-600 -mt-1">Multispecialty Hospital</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-slate-700 font-medium hover:text-teal-600 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-medium hover:from-orange-400 hover:to-amber-300 transition-all duration-300"
            >
              Login
            </Link>

            <a
              href="tel:+912249634780"
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium hover:bg-teal-100 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Book Appointment</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
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
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-600 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-center bg-gradient-to-r from-orange-500 to-amber-400 text-white font-medium"
              >
                Login
              </Link>
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-50">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span className="text-sm text-slate-600">
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