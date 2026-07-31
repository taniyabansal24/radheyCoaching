import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface GoalCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
}

export default function GoalCard({
  image,
  badge,
  title,
  description,
}: GoalCardProps) {
  return (
    <article className="group overflow-hidden rounded-[34px] border border-[#EEF1F5] bg-white shadow-[0_8px_35px_rgba(29,39,71,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(29,39,71,0.10)]">
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden rounded-t-[34px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        <span className="absolute bottom-2 left-4 rounded-full bg-[#A13F99] px-2 py-1 text-[11px] font-bold text-white">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 ">
        <h3 className=" text-[24px] font-semibold text-[#273147]">{title}</h3>

        <p className="mt-4 text-[14px] text-[#667085]">
          {description}
        </p>

        <button className="mt-4 flex items-center gap-2 text-[16px] font-semibold text-[#A13F99] transition-all group-hover:gap-3">
          View Curriculum
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
