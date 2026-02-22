"use client";

import {
  Phone,
  Mail,
  MapPin,
  Download,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="container-sm">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black">
            Let’s Build Something Meaningful
          </h2>
          <p className="mt-4 text-black/60 max-w-2xl mx-auto">
            Open to collaborations, product discussions, and new opportunities.
            Let’s connect and create scalable digital experiences.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}
          <div className="group border border-black/10 rounded-2xl p-8 transition duration-300 hover:border-black hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black transition">
              <Phone
                size={22}
                className="text-black group-hover:text-white transition"
              />
            </div>
            <h4 className="text-black font-medium mb-2">
              Phone
            </h4>
            <p className="text-black/60 text-sm">
              +91 8401111886
            </p>
          </div>

          {/* Email */}
          <div className="group border border-black/10 rounded-2xl p-8 transition duration-300 hover:border-black hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black transition">
              <Mail
                size={22}
                className="text-black group-hover:text-white transition"
              />
            </div>
            <h4 className="text-black font-medium mb-2">
              Email
            </h4>
            <p className="text-black/60 text-sm break-all">
              jayti0474@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className="group border border-black/10 rounded-2xl p-8 transition duration-300 hover:border-black hover:-translate-y-1">
            <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black transition">
              <MapPin
                size={22}
                className="text-black group-hover:text-white transition"
              />
            </div>
            <h4 className="text-black font-medium mb-2">
              Location
            </h4>
            <p className="text-black/60 text-sm">
              Ahmedabad Gujarat, India
            </p>
          </div>

          {/* CV Download */}
          <a
            href="/Jay-Tiwari-CV.pdf"
            download
            className="group border border-black/10 rounded-2xl p-8 transition duration-300 hover:border-black hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-6 group-hover:bg-black transition">
              <Download
                size={22}
                className="text-black group-hover:text-white transition"
              />
            </div>
            <h4 className="text-black font-medium mb-2">
              Download CV
            </h4>
            <p className="text-black/60 text-sm">
              View my full resume
            </p>
          </a>

        </div>

      </div>
    </section>
  );
}