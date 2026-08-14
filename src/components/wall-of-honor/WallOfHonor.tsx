import Image from "next/image";
import Container from "../ui/Container";

const foundationResults = [
  { name: "DHRUV KUMAR", percentage: "99%", image: "/images/dhruvKumar.jpeg" },
  { name: "RIYANSHI BISHT", percentage: "98%", image: "/images/riyanshi.jpeg" },
  { name: "GAURAV", percentage: "92%", image: "/images/gaurav.jpeg" },
  { name: "BHAVYA", percentage: "96%", image: "/images/bhavya.jpeg" },
  { name: "MEHUL NAGAR", percentage: "90%", image: "/images/mehul.jpeg" },
  { name: "RANJIT", percentage: "91%", image: "/images/ranjit.jpeg" },
  { name: "KUNAL", percentage: "89%", image: "/images/kunal.jpeg" },
  { name: "SONIA", percentage: "90%", image: "/images/sonia.jpeg" },
  { name: "MANJOT", percentage: "93%", image: "/images/manjot.jpeg" },
  { name: "NISHITA", percentage: "83%", image: "/images/nishita.jpeg" },
  { name: "HARSH", percentage: "92%", image: "/images/harsh.jpeg" },
  { name: "ASHISH", percentage: "90%", image: "/images/ashish.jpeg" },
];

const jeeResults = [
  {
    name: "Madhav Singh",
    score: "99.8%ile",
    school: "ADARSH PUBLIC SCHOOL",
    image: "/images/madhav.jpeg",
  },
  {
    name: "Prashant",
    score: "97.2%ile",
    school: "HGM INTERNATIONAL",
    image: "/images/prashant.jpeg",
  },
  {
    name: "Sahil Jindal",
    score: "95.7%ile",
    school: "K R MANGLAM SCHOOL",
    image: "/images/sahil.jpeg",
  },
];

const neetResults = [
  {
    name: "Naveen Gupta",
    rank: "AIR 3051",
    image: "/images/naveen.jpeg",
  },
  {
    name: "Farhan Ali",
    rank: "AIR 4342",
    image: "/images/farhan.jpeg",
  },
  {
    name: "Priyanshu Patel",
    rank: "AIR 5856",
    image: "/images/priyanshu.jpeg",
  },
];

function ResultHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 flex items-center gap-4 md:mb-12">
      <div className="h-px flex-1 bg-[#EED8EB]" />

      <h3 className="shrink-0 text-center text-xs font-bold tracking-[0.35em] text-[#A13F99] sm:text-sm">
        {children}
      </h3>

      <div className="h-px flex-1 bg-[#EED8EB]" />
    </div>
  );
}

export default function WallOfHonor() {
  return (
    <section
      id="results"
      className="bg-[#FCFCFD] py-16 md:py-20 lg:py-24"
    >
      <Container>
        {/* MAIN HEADING */}
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1F2937] sm:text-4xl md:mb-14 lg:text-5xl">
          The Radhey Wall of Honor
        </h2>

        {/* ================= FOUNDATION RESULTS ================= */}
        <ResultHeading>FOUNDATION RESULTS</ResultHeading>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6 lg:gap-5">
          {foundationResults.map((student) => (
            <div
              key={student.name}
              className="rounded-[20px] bg-white p-3.5 shadow-[0_4px_18px_rgba(31,41,55,0.03)] sm:rounded-[22px] sm:p-4"
            >
              {/* IMAGE */}
              <div className="relative aspect-square overflow-hidden rounded-[9px] border border-[#EBDCF0] bg-[#F8F8FA]">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 15vw"
                />
              </div>

              {/* NAME */}
              <h4 className="mt-4 truncate text-center text-[11px] font-bold text-[#263246] sm:text-xs">
                {student.name}
              </h4>

              {/* PERCENTAGE */}
              <p className="mt-1 text-center text-sm font-bold text-[#A13F99] sm:text-base">
                {student.percentage}
              </p>
            </div>
          ))}
        </div>

        {/* ================= JEE RESULTS ================= */}
        <div className="mt-20 md:mt-24">
          <ResultHeading>JEE MAINS RESULTS</ResultHeading>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {jeeResults.map((student) => (
              <div
                key={student.name}
                className="flex min-h-[220px] flex-col items-center justify-center rounded-[22px] border border-[#EBD7E8] bg-white px-5 py-7 text-center"
              >
                {/* ROUND IMAGE */}
                <div className="relative h-[92px] w-[92px] overflow-hidden rounded-full border-[4px] border-[#F5EAF4] bg-white">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                    sizes="92px"
                  />
                </div>

                <h4 className="mt-4 text-sm font-medium text-[#B04AA4] sm:text-base">
                  {student.name}
                </h4>

                <p className="mt-1 text-sm font-bold text-[#263246] sm:text-base">
                  {student.score}
                </p>

                <p className="mt-3 text-[9px] font-medium tracking-[0.16em] text-[#737B88] sm:text-[10px]">
                  {student.school}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= NEET RESULTS ================= */}
        <div className="mt-20 md:mt-24">
          <ResultHeading>NEET RESULTS</ResultHeading>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {neetResults.map((student) => (
              <div
                key={student.name}
                className="flex min-h-[210px] flex-col items-center justify-center rounded-[22px] bg-white px-5 py-7 text-center"
              >
                {/* ROUND IMAGE */}
                <div className="relative h-[96px] w-[96px] overflow-hidden rounded-full border-[4px] border-[#F5EAF4] bg-white">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                <h4 className="mt-4 text-sm font-medium text-[#B04AA4] sm:text-base">
                  {student.name}
                </h4>

                <p className="mt-1 text-lg font-bold text-[#263246] sm:text-xl">
                  {student.rank}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}