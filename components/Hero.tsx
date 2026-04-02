"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Heart, Clock } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "13 Years of Trust",
    desc: "Serving the community with unwavering commitment",
  },
  {
    icon: Heart,
    title: "Expert Care",
    desc: "Specialized treatment for all age groups",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock healthcare services",
  },
  {
    icon: Star,
    title: "4.2 Rating",
    desc: "Based on 150+ patient reviews",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements - Warm gradient with subtle green accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50/30" />
      
      {/* Animated gradient orbs - Orange/Red + Green */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-heal-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-heal-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 to-transparent rounded-full" />

      {/* Grid pattern overlay - using warm color */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge with Heart Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-700">Trusted Healthcare Since 2013</span>
              <Heart className="w-3 h-3 text-red-500 fill-current ml-1" />
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-trust-maroon">Caring for</span>
                <br />
                <span className="gradient-text">Every Generation</span>
              </h1>
              <p className="text-lg text-trust-brown/80 max-w-lg leading-relaxed">
                Suryakiran Multispecialty Hospital - Your trusted destination for comprehensive healthcare. 
                Where expertise meets empathy, and every patient is family.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary flex items-center gap-2">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="#services" className="px-6 py-3 bg-white text-trust-brown font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-500 hover:text-orange-600 transition-all duration-300">
                Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-200 to-red-200 border-2 border-white" />
                  ))}
                </div>
                <span className="text-sm text-trust-brown font-medium">150+ Reviews</span>
              </div>
              <div className="h-10 w-px bg-orange-300" />
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-orange-400 fill-orange-400' : 'text-orange-200'}`} />
                ))}
                <span className="ml-2 text-sm font-medium text-trust-maroon">4.2 Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glassmorphism card with warm gradient */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl shadow-orange-500/10 overflow-hidden">
              {/* Image placeholder */}
              <div className="aspect-[4/3] relative bg-gradient-to-br from-orange-100 to-red-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-xl shadow-orange-500/30">
                      <Heart className="w-12 h-12 text-white fill-current" />
                    </div>
                    <p className="text-orange-700 font-semibold">Suryakiran Hospital</p>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-orange-600 font-semibold text-sm">24/7 Emergency</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="text-heal-600 font-semibold text-sm">Pediatrics Care</span>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-orange-100 border-t border-orange-100">
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-orange-600">13+</p>
                  <p className="text-xs text-trust-brown/60">Years</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-orange-600">5+</p>
                  <p className="text-xs text-trust-brown/60">Doctors</p>
                </div>
                <div className="p-4 text-center">
                  <p className="text-2xl font-bold text-orange-600">150+</p>
                  <p className="text-xs text-trust-brown/60">Reviews</p>
                </div>
              </div>
            </div>

            {/* Decorative elements - Green accents */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-heal-400 to-heal-500 rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-20 blur-xl" />
          </motion.div>
        </div>

        {/* Features Grid with Green Accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover p-6 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-trust-maroon mb-1">{feature.title}</h3>
              <p className="text-sm text-trust-brown/60">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}