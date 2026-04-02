"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Our Doctors", href: "/#doctors" },
  { name: "Contact", href: "/#contact" },
];

const services = [
  "General Medicine",
  "Paediatrics",
  "General Surgery",
  "Viral Fever Treatment",
  "Child Healthcare",
  "Emergency Care",
];

export default function Footer() {
  return (
    <footer className="bg-trust-maroon text-white/80" id="contact">
      <div className="relative">
        {/* Decorative gradient - warm with green */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-heal-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Hospital Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <span className="font-montserrat font-bold text-xl text-white">
                    Suryakiran
                  </span>
                  <p className="text-xs text-orange-400">Multispecialty Hospital</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                A trusted private, multispeciality, and children&apos;s hospital with 13 years of experience in providing exceptional healthcare to the community.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="hover:text-heal-400 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-heal-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-white mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-montserrat font-semibold text-lg text-white mb-6">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-heal-500 mt-0.5" />
                  <a 
                    href="https://maps.app.goo.gl/LoS2dkxX8NAzkaXj7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-heal-400 transition-colors"
                  >
                    1st Floor, Near Kranti Nagar Auto Stand,<br />
                    Akruli Road, Kandivali East,<br />
                    Mumbai-400101, Maharashtra
                  </a>
                </div>
                <div className="mt-4 rounded-xl overflow-hidden border border-white/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1775023825808!5m2!1sen!2sin!6m8!1m7!1s96VnnoQ4atENUJv_sTPp3w!2m2!1d19.19499125650766!2d72.87238743249469!3f86.02687265104859!4f10.877778020737225!5f1.1924812503605782"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-heal-500" />
                  <a href="tel:+912249634780" className="hover:text-heal-400 transition-colors">
                    +91 2249634780
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-heal-500" />
                  <a href="mailto:info@suryakiranhospital.com" className="hover:text-heal-400 transition-colors">
                    info@suryakiranhospital.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-white/70 text-sm">Open 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm">
                &copy; 2026 Suryakiran Multispecialty Hospital. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-heartbeat" />
                <span>for a healthier tomorrow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}