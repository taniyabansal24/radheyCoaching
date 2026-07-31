"use client";

import Container from "../ui/Container";
import PricingCard from "./PricingCard";
import { courseFeeData } from "./data";

export default function CourseFeeSection() {
  return (
    <section className="bg-white">
      {/* ================= HERO ================= */}

      <div className="bg-[#9F4396] py-20 text-center text-white">
        <Container>
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-5xl font-bold">Our Courses</h2>

            <p className="mt-6 text-[16px] text-white/90">
              Choose the perfect course for your Jee Main / Advanced, NEET and
              CBSE Boards Foundation
            </p>
          </div>
        </Container>
      </div>

      {/* ================= CONTENT ================= */}
      <Container>
        <div className="py-24">
          {/* Heading */}

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.45em] text-[#A13F99]">
              Invest In Your Future
            </p>

            <h2 className="mt-5 text-5xl font-bold text-[#273147]">
              Course Fee Structure
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-[16px] text-[#667085]">
              Choose the perfect path for Jee Main/Advanced, NEET, and CBSE
              Foundation success.
            </p>
          </div>

          {/* ================= FOUNDATION ================= */}

          <div className="mt-20">
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute left-0 h-px w-full bg-[#ECECEC]" />

              <span className="relative bg-white px-8 text-lg font-normal text-[#A13F99]">
                Foundation Wing (6th - 8th)
              </span>
            </div>

            <div className="flex justify-center">
              <PricingCard {...courseFeeData.foundation[0]} />
            </div>
          </div>

          {/* ================= HIGH SCHOOL ================= */}

          <div className="mt-24 ">
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute left-0 h-px w-full bg-[#ECECEC]" />

              <span className="relative bg-white px-8 text-lg font-medium text-[#A13F99]">
                High School (9th - 10th)
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 max-w-3xl mx-auto">
              {courseFeeData.highSchool.map((course) => (
                <PricingCard key={course.title} {...course} />
              ))}
            </div>
          </div>

          {/* ================= SENIOR SECONDARY ================= */}

          <div className="mt-24">
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute left-0 h-px w-full bg-[#ECECEC]" />

              <span className="relative bg-white px-8 text-lg font-medium text-[#A13F99]">
                Senior Secondary (11th - 12th)
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {courseFeeData.seniorSecondary.map((course) => (
                <PricingCard key={course.title} {...course} />
              ))}
            </div>
          </div>


          {/* ================= Special Batches & Droppers ================= */}

          <div className="mt-24">
            <div className="relative mb-12 flex items-center justify-center">
              <div className="absolute left-0 h-px w-full bg-[#ECECEC]" />

              <span className="relative bg-white px-8 text-lg font-medium text-[#A13F99]">
                Special Batches & Droppers
              </span>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {courseFeeData.droppersBatches.map((course) => (
                <PricingCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
