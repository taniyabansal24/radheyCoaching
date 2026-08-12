"use client";

import { useState } from "react";
import { ArrowRight, PenTool, GraduationCap } from "lucide-react";
import MagicWandIcon from "../icon/MagicWandIcon";
import MagicPenIcon from "../icon/MagicPenIcon";
import Container from "../ui/Container";
import ContactDialog from "../Contact/ContactDialog";
import Link from "next/link";


export default function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <>
      <section id="home" className="relative overflow-hidden bg-[#FBF8FC]">
        <Container>
          {/* Background Glow */}
          <div className="absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#A53BA5]/5 blur-[120px]" />
          <div className="absolute left-[28%] top-24 blur-[10px] hidden rotate-[25deg] rounded-2xl bg-[#A53BA5] p-4 text-white shadow-2xl lg:block">
            <GraduationCap size={38} />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-14 lg:px-8">
            {/* Badge */}
            <div className="rounded-full border border-[#E8D8EE] bg-white/70 px-5 py-2 shadow-sm backdrop-blur">
              <span className="text-sm font-semibold text-[#9D4091]">
                Building Brighter Paths
              </span>
            </div>

            {/* Heading */}
            <div className="mt-8 max-w-5xl text-center">
              <h1 className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#131B38] sm:text-[52px] lg:text-[74px]">
                Where <span className="text-[#A53BA5]">Ambition</span>
                <br />
                <span className="relative inline-flex items-center justify-center px-4 py-2 mr-3">
                  {/* Background */}
                  <span className="absolute inset-0 bg-[#EFDDED]" />

                  {/* Left Guide */}
                  <span className="absolute left-0 top-5 h-[70%] w-[3px] bg-[#9D4091]" />

                  {/* Right Guide */}
                  <span className="absolute right-0 top-2 h-[70%] w-[3px] bg-[#9D4091]" />

                  {/* Top Left Dot */}
                  <span className="absolute -left-[5px] top-0 h-3 w-3 rounded-full bg-[#9D4091]" />

                  {/* Bottom Right Dot */}
                  <span className="absolute -right-[5px] bottom-0 h-3 w-3 rounded-full bg-[#9D4091]" />

                  {/* Text */}
                  <span className="relative z-10">Meets</span>
                </span>
                Excellence.
              </h1>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#5D6785] lg:text-[20px]">
                At LightReach, we connect people with communities in need, turning
                compassion into tangible change.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row">
              <Link href="#courses" className="group flex h-16 items-center gap-5 rounded-full bg-[#1D2747] px-8 text-lg font-semibold text-white shadow-xl transition hover:-translate-y-1">
                Explore Now
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </Link>

              <button onClick={() => setIsContactOpen(true)} className="group flex h-16 items-center gap-5 rounded-full border border-[#ECECEC] bg-white px-8 text-lg font-semibold text-[#1D2747] shadow-lg transition hover:-translate-y-1 z-30">
                Book Counselling
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1D2747] text-white transition group-hover:translate-x-1">
                  <ArrowRight size={22} />
                </span>
              </button>
            </div>

            {/* Floating Left */}
            <div className="absolute left-24 top-[75%] hidden -rotate-20 rounded-2xl border-2 border-white bg-[#9D4091] p-4 text-white shadow-[0_14px_30px_rgba(0,0,0,0.18),0_4px_8px_rgba(157,64,145,0.12)] lg:block">
              <MagicPenIcon />
            </div>

            {/* Floating Right */}
            <div className="absolute right-16 top-[140px] hidden -rotate-[25deg] rounded-2xl border-2 border-white bg-[#9D4091] py-5 px-6 text-white shadow-[0_14px_30px_rgba(0,0,0,0.18),0_4px_8px_rgba(157,64,145,0.12)] lg:block">
              <MagicWandIcon />
            </div>

            {/* Bottom Blur */}
            <div className="absolute bottom-20 blur-[10px] right-1/4 hidden rotate-[25deg] rounded-2xl bg-[#9D4091] p-4 text-white shadow-2xl lg:block">
              <GraduationCap size={38} />
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
