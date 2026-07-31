


import Image from "next/image";
import Container from "../ui/Container";

export default function WallOfHonor() {
  return (
    <section id="results" className="py-16 md:py-20 lg:py-24">
      <Container>
        <h2 className="mb-10 text-center text-3xl font-bold text-[#1F2937] sm:text-4xl lg:mb-16 lg:text-5xl">
          The Radhey Wall of Honor
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.9fr_1fr_0.8fr]">
          {/* LEFT CARD */}

          <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[500px] lg:h-[620px]">
            <Image
              src="/images/jee.jpg"
              alt="Aryan Sharma"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172344] via-[#172344]/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <h3 className="text-3xl font-bold sm:text-4xl">
                Aryan Sharma
              </h3>

              <span className="mt-4 inline-flex rounded-full bg-[#A13F99] px-5 py-2 text-xs font-semibold sm:text-sm">
                AIR 1 • JEE Advanced 2023
              </span>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/90">
                The faculty’s approach to complex thermodynamics transformed my
                weakest subject into my strongest rank-booster.
              </p>
            </div>
          </div>

          {/* MIDDLE CARD */}

          <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[500px] lg:h-[620px]">
            <Image
              src="/images/jee.jpg"
              alt="Riya Gupta"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#172344] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-7">
              <h3 className="text-2xl font-bold">
                Riya Gupta
              </h3>

              <p className="mt-2 text-base">
                AIR 24 • NEET 2023
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {/* Stats */}

            <div className="rounded-[28px] bg-[#1C2647] p-7 text-white lg:h-[285px]">
              <div className="flex -space-x-3">
                <Image
                  src="/images/avatar1.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />

                <Image
                  src="/images/avatar2.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />

                <Image
                  src="/images/avatar3.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-white"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#A13F99] text-sm">
                  +690
                </div>
              </div>

              <h3 className="mt-14 text-[36px] font-semibold">
                500+
              </h3>

              <p className="text-[18px] text-white/80">
                Students in top 1000 Ranks
              </p>
            </div>

            {/* Bottom Card */}

            <div className="relative h-[300px] overflow-hidden rounded-[28px] lg:h-[305px]">
              <Image
                src="/images/student-3.jpg"
                alt="Ananya Singh"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#172344] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">
                  Ananya Singh
                </h3>

                <p className="mt-2 text-base">
                  99.8 Percentile • JEE Main
                </p>
              </div>
            </div>
          </div>
        </div>
     </Container>
    </section>
  );
}