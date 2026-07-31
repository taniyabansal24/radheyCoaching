"use client";

import Link from "next/link";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  MessageSquareText,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#ECECEC] bg-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div className="text-center sm:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                <span className="text-4xl font-black leading-none">
                  <span className="text-[#A53BA5]">R</span>
                  <span className="text-black">C</span>
                </span>
              </div>

              <span className="text-lg font-semibold text-[#A53BA5] sm:text-xl">
                Radhey Coaching
              </span>
            </Link>

            <p className="mx-auto mt-6 max-w-xs text-sm leading-7 text-[#5B6478] sm:mx-0 sm:text-base">
              Empowering students through elite mentorship and innovative
              pedagogy since 2012.
            </p>

            <div className="mt-8 flex justify-center gap-4 sm:justify-start">
              {[Globe, MessageSquareText, Mail].map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F7ECF7] text-[#A13F99] transition hover:bg-[#A13F99] hover:text-white"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}

          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#1E2947]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Admissions",
                "Scholarship Test",
                "Course Finder",
                "Student Login",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#5B6478] transition hover:text-[#A13F99] sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}

          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#1E2947]">
              Support
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Privacy Policy",
                "Terms of Service",
                "FAQ",
                "Center Locator",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#5B6478] transition hover:text-[#A13F99] sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div className="text-center sm:text-left">
            <h3 className="text-base font-semibold uppercase tracking-wide text-[#1E2947]">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex items-start justify-center gap-3 sm:justify-start">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#A13F99]"
                />

                <p className="text-sm leading-7 text-[#5B6478] sm:text-base">
                  124, Education Hub,
                  <br />
                  Near Metro Station,
                  <br />
                  New Delhi - 110001
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Phone
                  size={20}
                  className="shrink-0 text-[#A13F99]"
                />

                <a
                  href="tel:+91180072433901"
                  className="text-sm text-[#5B6478] sm:text-base"
                >
                  +91 1800-RADHEY-01
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 sm:justify-start">
                <Mail
                  size={20}
                  className="shrink-0 text-[#A13F99]"
                />

                <a
                  href="mailto:admissions@radheycoaching.com"
                  className="break-all text-sm text-[#5B6478] sm:text-base"
                >
                  admissions@radheycoaching.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="border-t border-[#ECECEC] px-5 py-5">
        <p className="text-center text-xs leading-6 text-[#5B6478] sm:text-sm">
          © 2024 Radhey Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
}