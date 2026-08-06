import { ChevronLeft, ChevronRight } from "lucide-react";
import GoalCard from "./GoalCard";
import { goals } from "./goal-data";
import Container from "../ui/Container";

export default function GoalSection() {
  return (
    <section className="bg-[#FCFBFD] py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl md:text-5xl">
              Select Your Goal
            </h2>

            <p className="text-[16px] mt-6 text-[#4B5563]">
              Specialized programs for every stage of your academic journey.
            </p>
          </div>

          {/* <div className="hidden items-center gap-5 lg:flex">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1D2747] text-[#1D2747] transition hover:bg-[#1D2747] hover:text-white">
              <ChevronLeft size={26} />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D2747] text-white shadow-lg transition hover:scale-105">
              <ChevronRight size={26} />
            </button>
          </div> */}
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {goals.map((goal) => (
            <GoalCard key={goal.title} {...goal} />
          ))}
        </div>
      </Container>
    </section>
  );
}