"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ContactDialog from "../Contact/ContactDialog";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  duration?: string;
  board?: string;
  badge?: string;
}

export default function PricingCard({
  title,
  subtitle,
  price,
  priceSuffix,
  features,
  duration,
  board,
  badge,
}: PricingCardProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-[28px] border border-[#EEDFF0] bg-white p-8 shadow-[0_12px_40px_rgba(29,39,71,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(29,39,71,0.12)]">
        {/* Badge */}
        {badge && (
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <span className="rounded-full bg-[#A13F99] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
              {badge}
            </span>
          </div>
        )}

        {/* Subtitle */}
        <p className="text-[16px] text-[#273147]">{subtitle}</p>

        {/* Price */}
        <div className="mt-5 flex flex-wrap items-end gap-2">
          <h3 className="text-[30px] font-extrabold text-[#A13F99]">{price}</h3>

          {priceSuffix && (
            <span className="pb-1 text-lg font-medium text-[#667085]">
              {priceSuffix}
            </span>
          )}
        </div>

        {/* Features */}
        <ul className="mt-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <CheckCircle2 size={20} className="shrink-0 text-[#A13F99]" />

              <span className="text-[16px] text-[#667085]">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Bottom Info */}
        {(duration || board) && (
          <div className="mt-8 space-y-2">
            {duration && (
              <p className="text-[17px] font-semibold text-[#A13F99]">
                Duration: {duration}
              </p>
            )}

            {board && (
              <p className="text-[17px] font-medium text-[#667085]">
                For: {board}
              </p>
            )}
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setIsContactOpen(true)}
          className="mt-10 flex h-12 w-full items-center justify-center rounded-full bg-[#1D2747] text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(29,39,71,0.22)] transition-all duration-300 hover:bg-[#16203C]"
        >
          Enroll Now
        </button>
      </div>
      <ContactDialog
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
