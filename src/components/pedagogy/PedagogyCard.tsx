import { ArrowRight, Check } from "lucide-react";

interface Props {
  title: string;
  description: string;
  badge: string;
  icon: React.ElementType;
  points: string[];
}

export default function PedagogyCard({
  title,
  description,
  badge,
  icon: Icon,
  points,
}: Props) {
  return (
    <div className="group rounded-[30px] border border-[#F0EEF3] bg-white p-8 shadow-[0_20px_60px_rgba(40,40,40,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(157,64,145,0.12)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#9D4091] shadow-lg">
          <Icon className="h-8 w-8 text-white" strokeWidth={2.2} />
        </div>

        <span className="rounded-md bg-[#F9EDF6] px-3 py-1 text-[11px] font-bold tracking-wide text-[#9D4091]">
          ★ {badge}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-8 whitespace-pre-line text-[28px] font-normal leading-tight text-[#273147]">
        {title}
      </h3>

      <div className="mt-5 h-1 w-12 rounded-full bg-[#9D4091]" />

      {/* Description */}
      <p className="mt-7 min-h-[90px] text-[14px] text-[#6B7280]">
        {description}
      </p>

      {/* Features */}
      <div className=" space-y-3">
        {points.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl bg-[#FCF1F8] px-4 py-3"
          >
            <Check className="h-4 w-4 text-[#9D4091]" />
            <span className="text-[15px] font-medium text-[#344054]">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <button className="mt-10 flex items-center gap-3 font-semibold text-[#273147] transition-all group-hover:gap-4">
        Learn More
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}