import Image from "next/image";

interface FacilityCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function FacilityCard({
  image,
  title,
  subtitle,
}: FacilityCardProps) {
  return (
    <div className="group relative h-[430px] overflow-hidden rounded-[18px]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

      <div className="absolute bottom-8 left-5">
        <h3 className="text-[22px] font-bold text-white">{title}</h3>

        <p className="mt-1 text-[14px] font-semibold text-[#FFFFFF]">{subtitle}</p>
      </div>
    </div>
  );
}
