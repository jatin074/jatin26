"use client";

import Link from "next/link";
import {
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="sm:py-24 py-10 sm:rounded-t-[70px] shadow-2xl bg-gray-100">
      <div className="container-sm">
        <div>

          {/* OUTER CARD */}
          <div className="bg-white sm:rounded-[40px] rounded-xl border border-black/5 p-6 sm:p-10 shadow-lg">

            {/* INNER CARD */}
            <div className="bg-white border border-black/5 rounded-3xl p-8 sm:p-12">

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="md:col-span-1">
                  <div className="w-10 h-10 bg-black rounded-md flex items-center justify-center mb-6">
                    <span className="text-white font-semibold tracking-widest">
                      JT
                    </span>
                  </div>

                  <p className="text-black/60 text-sm leading-relaxed max-w-xs">
                    UI/UX Designer & Frontend Engineer building scalable
                    digital products with design clarity and technical precision.
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <h4 className="text-black font-medium mb-6">
                    Navigation
                  </h4>
                  <ul className="space-y-3 text-black/60 text-sm">
                    <li>
                      <Link href="#about" className="hover:text-black transition">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#projects" className="hover:text-black transition">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="#skills" className="hover:text-black transition">
                        Skills
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="hover:text-black transition">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="text-black font-medium mb-6">
                    Resources
                  </h4>
                  <ul className="space-y-3 text-black/60 text-sm">
                    <li>
                      <Link href="#" className="hover:text-black transition">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-black transition">
                        Design Process
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-black transition">
                        UI Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-black transition">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Social */}
                <div>
                  <h4 className="text-black font-medium mb-6">
                    Connect
                  </h4>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/jatin-tiwari-13b077294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      className="w-10 h-10 rounded-md border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition"
                    >
                      <Linkedin size={18} />
                    </a>

                    <a
                      href="https://www.instagram.com/im__jay_411?igsh=cThsMGlnMm01Mmxt"
                      target="_blank"
                      className="w-10 h-10 rounded-md border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition"
                    >
                      <Instagram size={18} />
                    </a>

                    <a
                      href="https://wa.me/+918401111886"
                      target="_blank"
                      className="w-10 h-10 rounded-md border border-black/10 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition"
                    >
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

              </div>

              {/* Bottom Divider */}
              <div className="mt-12 pt-6 border-t border-black/5 flex flex-col md:flex-row items-center justify-between text-black/50 text-sm">

                <p>
                  © {new Date().getFullYear()} Jatin Tiwari. All rights reserved.
                </p>

                <div className="flex items-center gap-6 mt-3 md:mt-0">
                  <Link href="#" className="hover:text-black transition">
                    Terms of Service
                  </Link>
                  <Link href="#" className="hover:text-black transition">
                    Privacy Policy
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}