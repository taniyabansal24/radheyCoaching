"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import ContactDialog from "../Contact/ContactDialog";

export default function TransformSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <section id="about" className="py-24 bg-[#FAFAFC]">
        <Container>
          <div className="flex items-center justify-between gap-10">
            {/* Left */}
            <div className="max-w-[610px]">
              <h2 className="text-3xl font-bold text-[#2E2E2E] sm:text-4xl md:text-[48px]">
                Transform your Life
                <br />
                with Radhey Coaching
              </h2>

              <p className="mt-8 text-[16px] text-[#666666]">
                Transform your dreams into reality with Radhey Coaching - Where
                excellence meets dedication in medical entrance preparation
              </p>

              <div className="mt-12 flex flex-wrap gap-5">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="h-14 rounded-full bg-[#9D4091] px-8 text-[16px] font-semibold text-white transition hover:bg-[#8A3880]"
                >
                  Start Your Journey
                </button>

                <a
                  href="/brochure/Radhey-Coaching-Brochure.pdf"
                  download
                  className="flex h-14 items-center justify-center rounded-full border-2 border-[#9D4091] bg-white px-8 text-[16px] font-semibold text-[#9D4091] transition hover:bg-[#9D4091] hover:text-white"
                >
                  Download Brochure
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="relative hidden h-[470px] w-[690px] lg:block">
              {/* Student */}
              <div className="absolute left-0 top-24 h-[260px] w-[180px] overflow-hidden rounded-[24px] bg-[#9D4091] shadow-[0_18px_40px_rgba(0,0,0,.18)]">
                <Image
                  src="/images/student.png"
                  alt="Student"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Teacher */}
              <div className="absolute right-0 top-0 h-[250px] w-[180px] overflow-hidden rounded-[24px] bg-[#1E2748] shadow-[0_18px_40px_rgba(0,0,0,.18)]">
                <Image
                  src="/images/tanishqSharma.png"
                  alt="Teacher"
                  fill
                  className="object-contain object-bottom"
                />
              </div>

              {/* Student Question */}
              <div className="absolute left-[120px] top-6 w-[200px] rounded-[24px] border-2 border-[#9D4091] bg-white p-6 shadow-[0_12px_35px_rgba(157,64,145,.18)]">
                <p className="text-[14px] text-[#3D3D3D]">
                  Sir, I don&apos;t understand anything, what should I do?
                </p>
              </div>

              {/* Teacher Reply */}
              <div className="absolute bottom-25 right-[100px] w-[200px] rounded-[24px] border-2 border-[#1E2748] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,.15)]">
                <p className="text-[14px] text-[#3D3D3D]">
                  No problem, we will go over the basics again. Keep asking your
                  doubts, I will help you. Together, we will understand it.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ContactDialog
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
