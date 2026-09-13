
"use client";

import { useState } from "react";
import { ChevronDown, CircleHelp } from "lucide-react";
import Container from "../ui/Container";

const faqs = [
  {
    question: "What courses does Radhey Coaching offer?",
    answer:
      "Radhey Coaching offers structured preparation programs and academic support to help students build strong concepts and achieve their academic goals.",
  },
  {
    question: "Who can join Radhey Coaching?",
    answer:
      "Students from different academic levels can join our programs. Our courses are designed to support students throughout their learning journey.",
  },
  {
    question: "Are both online and offline classes available?",
    answer:
      "Yes, Radhey Coaching offers flexible learning options with online and offline classes to suit different student needs.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can contact our admission team or visit the coaching center to learn about available courses, batches, and the enrollment process.",
  },
  {
    question: "Do you provide study materials and practice tests?",
    answer:
      "Yes, students receive study materials and practice resources to strengthen their concepts and prepare effectively for examinations.",
  },
  {
    question: "How can I contact Radhey Coaching?",
    answer:
      "You can reach out to our team through the contact details available on our website. We will be happy to assist you.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24" id="faq">
      <Container>
        <div className="  ">
          {/* HEADER */}

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-8 text-2xl font-semibold text-[#273147] sm:text-[30px]">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-[16px] text-[#667085]">
              Find answers to common questions about our courses, admissions,
              and learning experience.
            </p>
          </div>

          {/* FAQ LIST */}

          <div className="mx-auto mt-12 max-w-4xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#F1EEF4] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-[16px] font-bold text-[#273147]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className={`flex-shrink-0 text-[#A13F99] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-[14px] leading-7 text-[#667085]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}