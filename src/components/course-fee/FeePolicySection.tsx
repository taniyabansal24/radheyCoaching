import { PencilLine } from "lucide-react";
import Container from "../ui/Container";

const policies = [
  "Admission Fee is non-refundable and includes comprehensive study materials (books, notes, worksheets).",
  "Tuition Fee is refundable only within the first 15 days or 15 classes, whichever occurs earlier.",
  "Charges for attended classes will be deducted; only the remaining eligible Tuition Fee will be refunded.",
  "Post 15 days/classes, the Tuition Fee becomes completely non-refundable. All requests must be submitted in writing.",
];

const feeItems = [
  {
    title: "₹5,500",
    subtitle: "REGISTRATION",
  },
  {
    title: "Standard",
    subtitle: "ADMISSION FEE",
  },
  {
    title: "Tiered",
    subtitle: "TUITION FEE",
  },
];

export default function FeePolicySection() {
  return (
    <section className="py-24 bg-[#FFFFFF]">
      <Container>
        <div className="rounded-[36px] border border-[#F1EEF4] bg-white p-10 shadow-[0_12px_50px_rgba(15,23,42,0.04)] lg:p-16">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* LEFT */}

            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F8EEF7] px-5 py-3">
                <PencilLine size={18} className="text-[#A13F99]" />

                <span className="text-sm font-semibold uppercase text-[#A13F99]">
                  Policies
                </span>
              </div>

              <h2 className="mt-8 text-2xl font-semibold text-[#273147] sm:text-[30px]">
                Fee Composition & Policy
              </h2>

              <p className="mt-6 max-w-xl text-[16px] text-[#667085]">
                Transparent billing ensures you focus entirely on your academics
                without administrative stress.
              </p>

              {/* Fee Boxes */}

              <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {feeItems.map((item) => (
                  <div
                    key={item.subtitle}
                    className="rounded-[22px] bg-[#FAF8FB] p-4"
                  >
                    <h3 className="text-[18px] font-bold text-[#A13F99]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#667085]">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div>
              <h3 className="text-[16px] font-bold text-[#273147]">
                Refund Terms & Conditions
              </h3>

              <ul className="mt-10 space-y-8">
                {policies.map((item) => (
                  <li key={item} className="flex items-start gap-5">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#A13F99]" />
                    <p className="text-[14px] text-[#667085]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
