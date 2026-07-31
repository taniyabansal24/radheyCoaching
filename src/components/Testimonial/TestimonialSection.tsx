import Image from "next/image";
import Container from "../ui/Container";

export default function TestimonialSection() {
  return (
    <section className="bg-[#FBFBFD] py-16 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-white px-6 py-12 shadow-[0_12px_60px_rgba(25,35,70,0.04)] sm:px-10 md:rounded-[36px] md:px-14 md:py-16 lg:rounded-[48px] lg:px-24 lg:py-24">
          {/* Quote */}

          <div className="pointer-events-none absolute left-4 top-4 select-none text-[90px] font-bold leading-none text-[#F4E8F4] sm:left-8 sm:top-8 sm:text-[120px] lg:left-16 lg:top-14 lg:text-[170px]">
            “
          </div>

          {/* Content */}

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
            <p className="text-center text-base leading-8 tracking-wide text-[#1F2937] sm:text-lg sm:leading-9 lg:text-[20px] lg:leading-10">
              &quot;The atmosphere at Radhey Coaching is not about competition,
              it&apos;s about clarity. The way Dr. Rathore simplifies Quantum
              Mechanics changed everything for me. I wouldn&apos;t be at IIT
              Bombay without them.&quot;
            </p>

            {/* Student */}

            <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-14 sm:flex-row sm:text-left lg:mt-16">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-[5px] border-[#EEF1F8] sm:h-20 sm:w-20">
                <Image
                  src="/images/student-avatar.jpg"
                  alt="Ishaan Malhotra"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1E293B] sm:text-xl">
                  Ishaan Malhotra
                </h3>

                <p className="mt-1 text-sm text-[#6B7280] sm:text-base">
                  IIT-Bombay, CSE Batch 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}