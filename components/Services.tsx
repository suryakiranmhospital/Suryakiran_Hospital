"use client";

import { motion } from "framer-motion";
import { Stethoscope, Baby, HeartPulse, Thermometer, Activity, Bone, Heart } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "General Medicine",
    desc: "Comprehensive primary care for adults, including diagnosis, treatment, and preventive care for various health conditions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    desc: "Specialized healthcare for infants, children, and adolescents, from routine check-ups to advanced treatments.",
    color: "from-heal-400 to-heal-500",
  },
  {
    icon: HeartPulse,
    title: "General Surgery",
    desc: "Expert surgical care using modern techniques for a wide range of conditions, ensuring patient safety and quick recovery.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Thermometer,
    title: "Viral Fever Treatment",
    desc: "Specialized care and management for viral fevers and related infections with timely diagnosis and effective treatment.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: Activity,
    title: "Diagnostic Services",
    desc: "Advanced diagnostic facilities including lab tests, imaging, and pathology services for accurate diagnosis.",
    color: "from-heal-500 to-green-500",
  },
  {
    icon: Bone,
    title: "Child Healthcare",
    desc: "Dedicated pediatric care including vaccinations, growth monitoring, and developmental assessments.",
    color: "from-red-400 to-pink-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-orange-50/50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-montserrat text-3xl sm:text-4xl font-bold text-trust-maroon mb-4">
            Comprehensive <span className="gradient-text">Healthcare Services</span>
          </h2>
          <p className="text-trust-brown/80 max-w-2xl mx-auto">
            We offer a wide range of medical services tailored to meet the diverse healthcare needs of our patients, from preventive care to specialized treatments.
          </p>
        </motion.div>

        {/* Services Grid with Green decorative circles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card-hover group p-6 relative overflow-hidden"
            >
              {/* Green decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-heal-400/10 rounded-full blur-2xl" />
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-semibold text-xl text-trust-maroon mb-3">
                {service.title}
              </h3>
              <p className="text-trust-brown/70 leading-relaxed">
                {service.desc}
              </p>

              {/* Learn more link */}
              <div className="mt-4 flex items-center gap-2 text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Book an Appointment
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}