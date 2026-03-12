import React from "react";
import Image from "next/image";
import { Twitter, Facebook, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=200&h=150&fit=crop",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=200&h=150&fit=crop",
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1535] text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-6xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Quick Link</h4>
            <ul className="space-y-2.5 text-sm">
              {["About Us", "Contact Us", "Privacy Policy", "Terms & Condition", "FAQs & Help"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="flex items-center gap-2 hover:text-[#06bbcc] transition-colors group"
                  >
                    <span className="text-[#06bbcc] group-hover:translate-x-1 transition-transform">›</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#06bbcc] mt-0.5 shrink-0" />
                <span>123 Street, New York, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#06bbcc] shrink-0" />
                <span>+012 345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#06bbcc] shrink-0" />
                <span>info@example.com</span>
              </li>
            </ul>
            {/* Social Icons */}
            <div className="flex gap-2 mt-6">
              {[
                { icon: <Twitter size={15} />, href: "#" },
                { icon: <Facebook size={15} />, href: "#" },
                { icon: <Youtube size={15} />, href: "#" },
                { icon: <Linkedin size={15} />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 border border-gray-600 flex items-center justify-center rounded-full hover:bg-[#06bbcc] hover:border-[#06bbcc] hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Gallery</h4>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-5">Newsletter</h4>
            <p className="text-sm mb-5 leading-relaxed">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-white text-gray-700 text-sm px-4 py-2.5 outline-none placeholder-gray-400 min-w-0"
              />
              <button className="bg-[#06bbcc] hover:bg-[#05a5b5] text-white text-sm font-semibold px-5 py-2.5 transition-colors shrink-0">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 max-w-6xl py-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 text-sm text-gray-400">
            <div>
              <p>
                © <a href="#" className="text-[#06bbcc] hover:underline">Your Site Name</a>, All Right Reserved. Designed By{" "}
                <a href="#" className="text-[#06bbcc] hover:underline">HTML Codex</a>
              </p>
              <p className="mt-1">
                Distributed By <a href="#" className="text-[#06bbcc] hover:underline">ThemeWagon</a>
              </p>
            </div>
            <div className="flex gap-5">
              {["Home", "Cookies", "Help", "FQAs"].map((item) => (
                <a key={item} href="#" className="hover:text-[#06bbcc] transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
