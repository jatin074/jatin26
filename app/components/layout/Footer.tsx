"use client";

import Link from "next/link";
import {
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Left - Brand */}
          <div>
            <div className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center mb-6">
              <span className="text-white font-semibold tracking-widest">
                JT
              </span>
            </div>

            <p className="text-white/60 max-w-sm leading-relaxed">
              UI/UX Designer & Frontend Engineer focused on building scalable
              design systems, modern interfaces, and performance-driven
              digital products.
            </p>
          </div>

          {/* Middle - Navigation */}
          <div>
            <h4 className="text-white font-medium mb-6">
              Navigation
            </h4>

            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right - Social */}
          <div>
            <h4 className="text-white font-medium mb-6">
              Connect
            </h4>

            <div className="flex items-center gap-5">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://wa.me/your-number"
                target="_blank"
                className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
              >
                <MessageCircle size={18} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-white/50 text-sm">

          <p>
            © {new Date().getFullYear()} Jatin Tiwari. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed & Developed by JT
          </p>
        </div>
      </div>
    </footer>
  );
}