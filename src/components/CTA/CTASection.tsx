"use client";

import { useState } from "react";
import Container from "../ui/Container";
import ContactDialog from "../Contact/ContactDialog";

export default function CTASection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure/Radhey-Coaching-Brochure.pdf";
    link.download = "Radhey-Coaching-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="py-16 lg:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#A03E98] via-[#C04D9D] to-[#E1338E] px-6 py-14 text-center shadow-[0_25px_60px_rgba(0,0,0,0.18)] sm:px-10 sm:py-16 md:rounded-[40px] md:px-14 md:py-20 lg:rounded-[52px] lg:px-20 lg:py-24">
            {/* Decorative Circles */}

            <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-white/15 sm:h-48 sm:w-48 lg:-left-16 lg:-top-16 lg:h-56 lg:w-56" />

            <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-white/15 sm:h-48 sm:w-48 lg:-bottom-16 lg:-right-10 lg:h-56 lg:w-56" />

            {/* Content */}

            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Shape Your Future
                <br />
                <span className="font-normal">Today.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 sm:mt-8 sm:text-lg sm:leading-8 lg:mt-10 lg:text-xl lg:leading-9">
                Join the next cohort of India&apos;s top-performing students.
                Admissions for the 2024-25 session are now open.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center lg:mt-14 lg:gap-5">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="w-full rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#A03E98] shadow-[0_15px_35px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 sm:w-auto sm:min-w-[220px] sm:text-lg lg:px-10 lg:py-5"
                >
                  Apply Online Now
                </button>

                <button
                  onClick={handleDownloadBrochure}
                  className="w-full rounded-xl border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#A03E98] sm:w-auto sm:min-w-[220px] sm:text-lg lg:px-10 lg:py-5"
                >
                  Download Brochure
                </button>
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
