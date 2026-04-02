"use client";

import { motion } from "framer-motion";
import { Star, Award, Clock, Heart } from "lucide-react";

const doctors = [
  {
    name: "Dr. Mahima Bilore",
    specialty: "General Surgeon",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 85,
    description: "Highly praised General Surgeon with extensive experience in minimally invasive surgeries and patient care.",
  },
  {
    name: "Dr. Shivam",
    specialty: "General Physician",
    experience: "8+ Years",
    rating: 4.8,
    reviews: 72,
    description: "Dedicated General Physician known for accurate diagnosis and compassionate patient approach.",
  },
  {
    name: "Dr. Abhishek",
    specialty: "Pediatrician",
    experience: "7+ Years",
    rating: 4.9,
    reviews: 95,
    description: "Expert Pediatrician specializing in child healthcare, vaccinations, and developmental assessments.",
  },
  {
    name: "Dr. Sangeeta Chatterjee",
    specialty: "General Medicine",
    experience: "12+ Years",
    rating: 4.7,
    reviews: 68,
    description: "Experienced physician in internal medicine with focus on preventive healthcare and chronic disease management.",
  },
  {
    name: "Dr. Nilesh Ghorpade",
    specialty: "General Surgeon",
    experience: "9+ Years",
    rating: 4.8,
    reviews: 78,
    description: "Skilled surgeon with expertise in abdominal surgeries and emergency surgical procedures.",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="section-padding bg-orange-50/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-heal-50 text-heal-700 text-sm font-medium mb-4">
            Our Medical Team
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-trust-maroon mb-4">
            Meet Our <span className="gradient-text">Expert Doctors</span>
          </h2>
          <p className="text-trust-brown/80 max-w-2xl mx-auto">
            Our team of highly praised and experienced medical professionals is dedicated to providing you with the best possible care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover group"
            >
              {/* Image with warm gradient */}
              <div className="relative aspect-square rounded-t-2xl bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">
                      {doctor.name.split(" ").pop()?.charAt(0)}
                    </span>
                  </div>
                </div>
                
                {/* Experience badge with green accent */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="text-xs font-semibold text-heal-700">{doctor.experience}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-montserrat font-semibold text-lg text-trust-maroon mb-1">
                  {doctor.name}
                </h3>
                <p className="text-orange-600 font-medium text-sm mb-3">
                  {doctor.specialty}
                </p>
                <p className="text-trust-brown/70 text-sm leading-relaxed mb-4 line-clamp-2">
                  {doctor.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-between pt-3 border-t border-orange-100">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    <span className="text-sm font-semibold text-trust-maroon">{doctor.rating}</span>
                    <span className="text-xs text-trust-brown/60">({doctor.reviews})</span>
                  </div>
                  <button className="text-orange-600 text-sm font-medium hover:text-orange-700 transition-colors">
                    Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            <Award className="w-5 h-5" />
            View All Doctors
          </a>
        </motion.div>
      </div>
    </section>
  );
}