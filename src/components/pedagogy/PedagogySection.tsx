import Container from "../ui/Container";
import PedagogyCard from "./PedagogyCard";
import { pedagogyCards } from "./pedagogy-data";

export default function PedagogySection() {
  return (
    <section className="bg-[#FCFBFD] py-28">
      <Container>
        {/* Heading */}
        <div className="mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#1F2937]">
            Precision-Driven Pedagogy
          </h2>

          <p className="text-[16px] mt-6 text-[#4B5563]">
            We don&apos;t just teach subjects; we build cognitive foundations <br />
            for a lifetime of success.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {pedagogyCards.map((card) => (
            <PedagogyCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
