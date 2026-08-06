"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Container from "../ui/Container";

const faculty = [
  {
    name: "Tanishq Sharma",
    subject: "Mathematics Faculty",
    experience: "7 Years of Experience",
    image: "/images/tanishqSharma.png",
    description:
      "An experienced and dedicated Mathematics educator, Tanishq Sharma is known for simplifying complex concepts through clear explanations and practical problem-solving techniques.",
  },
  {
    name: "Jitender Yadav",
    subject: "Chemistry Faculty",
    experience: "15+ Years of Experience",
    image: "/images/jitenderYadav.png",
    description:
      "A highly experienced and dedicated Chemistry educator, Jitender Yadav has more than 15 years of teaching expertise.",
  },
  {
    name: "Atul Kumar",
    subject: "Physics Faculty",
    experience: "10+ Years of Experience",
    image: "/images/atulKumar.png",
    description:
      "An experienced and passionate Physics educator, Atul Kumar has more than 10 years of teaching expertise. He makes complex concepts easy to understand through clear explanations.",
  },
  {
    name: "Shyam Negi",
    subject: "Biology Faculty",
    experience: "20+ Years of Experience",
    image: "/images/shyamNegi.png",
    description:
      "A highly experienced and dedicated Biology educator, Shyam Negi brings more than 20 years of teaching expertise. He explains complex biological concepts with clarity.",
  },
  {
    name: "Pandav Kumar",
    subject: "Economics Faculty",
    experience: "5+ Years of Experience",
    image: "/images/pandavKumar.png",
    description:
      "A dedicated and knowledgeable Economics educator, Pandav Kumar brings more than 5 years of teaching experience. He explains economic concepts through simple examples.",
  },
  {
    name: "Disha Thakur",
    subject: "Accounts Faculty",
    experience: "5+ Years of Experience",
    image: "/images/dishaThakur.png",
    description:
      "A dedicated and experienced Accounts educator, Disha Thakur brings more than 6 years of teaching expertise. She simplifies accounting principles through clear explanations.",
  },
  {
    name: "Nidhi Sharma",
    subject: "Junior Wing Faculty",
    experience: "6+ Years of Experience",
    image: "/images/nidhiSharma.png",
    description:
      "A caring and experienced Junior Wing educator, Nidhi Sharma brings more than 6 years of teaching expertise. She creates a friendly and engaging learning environment.",
  },
  {
    name: "Radhika",
    subject: "Junior Wing Faculty",
    experience: "6+ Years of Experience",
    image: "/images/radhika.png",
    description:
      "A warm and dedicated Junior Wing educator, Radhika brings more than 6 years of teaching experience. She uses interactive activities and simple explanations.",
  },
];

export default function FacultyCarousel() {
  return (
    <section id="faculty" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Heading */}

        <div className="text-center">
          <div className="inline-flex rounded-full bg-[#9D3E91] px-5 py-3 shadow-lg sm:px-8 sm:py-4 lg:px-10">
            <span className="text-lg font-semibold uppercase tracking-[2px] text-white sm:text-2xl lg:text-4xl">
              Our Experienced Faculty
            </span>
          </div>

          <p className="mt-5 px-4 text-sm text-[#9D3E91] sm:text-base">
            &quot;Children must be taught how to think, not what to think.&quot;
          </p>
        </div>

        {/* Carousel */}

        <div className="relative mt-12 lg:mt-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            speed={900}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".faculty-prev",
              nextEl: ".faculty-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
            }}
          >
            {faculty.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <div className="h-full">
                  <div className="flex h-full min-h-[230px] flex-col rounded-[24px] border border-[#E6E6E6] bg-white p-4 shadow-[0_10px_25px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 lg:min-h-[260px] lg:p-5">
                    <div className="flex h-full flex-col gap-5 sm:flex-row">
                      {/* Image */}

                      <div className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-2xl border-[3px] border-[#A13F99] sm:w-[170px] md:w-[180px] lg:w-[190px] xl:w-[200px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain object-bottom sm:object-cover sm:object-bottom scale-[1.03]"
                        />
                      </div>

                      {/* Content */}

                      <div className="flex flex-1 flex-col justify-center md:mt-6">
                        <h3 className="text-xl font-bold uppercase leading-tight text-[#A13F99] lg:text-2xl">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-sm font-semibold leading-6 text-[#1E2947] lg:text-base">
                          {item.subject}
                          <br className="sm:hidden" />
                          <span className="hidden sm:inline"> | </span>
                          {item.experience}
                        </p>

                        <p className="mt-4 flex-1 text-sm leading-7 text-[#666] line-clamp-5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}

          <div className="mt-8 flex justify-center gap-4 lg:mt-10">
            <button className="faculty-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#1E2947] text-[#1E2947] transition hover:bg-[#1E2947] hover:text-white lg:h-12 lg:w-12">
              <ChevronLeft size={20} />
            </button>

            <button className="faculty-next flex h-11 w-11 items-center justify-center rounded-full bg-[#1E2947] text-white shadow-lg transition hover:scale-105 lg:h-12 lg:w-12">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
