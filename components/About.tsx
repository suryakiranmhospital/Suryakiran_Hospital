"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, HeartHandshake } from "lucide-react";

const stats = [
  { value: "13+", label: "Years Experience", icon: Clock },
  { value: "50000+", label: "Patients Served", icon: Users },
  { value: "5+", label: "Expert Doctors", icon: Award },
  { value: "4.2", label: "Star Rating", icon: HeartHandshake },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                A Legacy of <span className="gradient-text">Healthcare Excellence</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                For over 13 years, <strong>Suryakiran Multispecialty Hospital</strong> has been a beacon of hope and healing for families in Kandivali East, Mumbai, and surrounding areas. 
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Founded with a vision to provide world-class healthcare with a personal touch, our hospital has grown to become a trusted name in multispecialty care, particularly in pediatrics and general medicine. We believe that every patient deserves compassionate, comprehensive, and cutting-edge medical treatment.
              </p>
            </div>

            {/* Key highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Advanced Medical Technology",
                "Clean & Sterile Environment",
                "Dedicated Children's Ward",
                "24/7 Emergency Services",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-silver-50"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-teal-600" />
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100">
              {/* Main image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-teal-500/30">
                    <HeartHandshake className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-teal-700 font-semibold">Excellence in Care</p>
                </div>
                
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-teal-100"
                >
                  <span className="text-teal-600 font-semibold text-sm">ISO Certified</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-100"
                >
                  <span className="text-orange-600 font-semibold text-sm">Best in Class</span>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}