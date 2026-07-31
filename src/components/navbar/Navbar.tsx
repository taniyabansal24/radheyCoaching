"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "../ui/Container";
import ContactDialog from "../Contact/ContactDialog";
import logo from "/images/tanishqSharma.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const ids = ["home", "courses", "results", "faculty", "about"];
    const elements = ids.map((id) => document.getElementById(id));

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#EFE7F4] bg-white/90 backdrop-blur-md">
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Radhey Coaching Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <span className="text-[18px] font-semibold text-[#A53BA5] md:text-[20px]">
                Radhey Coaching
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-10 lg:flex">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative text-[14px] font-bold transition-colors ${
                      isActive
                        ? "text-[#A53BA5]"
                        : "text-gray-600 hover:text-[#A53BA5]"
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#A53BA5]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsContactOpen(true)}
                className="rounded-xl border-2 border-white bg-[#9D4091] px-8 py-3 text-[16px] font-normal text-white shadow-[0_12px_30px_rgba(160,62,151,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#96388E] hover:shadow-[0_16px_35px_rgba(160,62,151,0.45)]"
              >
                Enroll Now{" "}
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="rounded-lg p-2 transition hover:bg-gray-100 lg:hidden"
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden border-t border-[#EFE7F4] bg-white transition-all duration-300 lg:hidden ${
              open ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="space-y-1 px-5 py-5">
              {navItems.map((item) => {
                const isActive = item.href === `#${activeSection}`;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-[15px] font-medium transition ${
                      isActive
                        ? "bg-[#F8ECF8] text-[#A53BA5]"
                        : "text-gray-700 hover:bg-[#F8ECF8] hover:text-[#A53BA5]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <button
                onClick={() => {
                  setIsContactOpen(true);
                  setOpen(false);
                }}
                className="mt-4 w-full rounded-xl bg-[#A53BA5] py-3 text-sm font-medium text-white shadow-lg transition hover:bg-[#922C92]"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </Container>
      </header>
      <ContactDialog
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
