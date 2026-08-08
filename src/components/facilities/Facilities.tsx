import Container from "../ui/Container";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    image: "/images/classroom.png",
    title: "Class Room",
    subtitle: "ABCD Facility",
  },
  {
    image: "/images/classroom.png",
    title: "Online facilities",
    subtitle: "ABCD Facility",
  },
  {
    image: "/images/classroom.png",
    title: "Experienced Teacher",
    subtitle: "ABCD work exp",
  },
];

export default function Facilities() {
  return (
    <section className="-mt-6 pb-24">
      <Container>
        <div className="relative">
          {/* Back Layer */}
          <div className="absolute left-[12px] top-[12px] h-full w-full rounded-[34px] bg-[#D78BD3]" />

          {/* Front Container */}
          <div className="relative rounded-[34px] border-[6px] border-[#9D3F91] bg-white p-6">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {facilities.map((facility) => (
                <FacilityCard key={facility.title} {...facility} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
