import CourseFeeSection from "@/components/course-fee/CourseFeeSection";
import FeePolicySection from "@/components/course-fee/FeePolicySection";
import CTASection from "@/components/CTA/CTASection";
import Facilities from "@/components/facilities/Facilities";
import FacultyCarousel from "@/components/faculty/FacultyCarousel";
import Footer from "@/components/Footer/Footer";
import GoalSection from "@/components/goals/GoalSection";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import PedagogySection from "@/components/pedagogy/PedagogySection";
import TestimonialSection from "@/components/Testimonial/TestimonialSection";
import TransformSection from "@/components/transform/TransformSection";
import WallOfHonor from "@/components/wall-of-honor/WallOfHonor";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FC]">
      <Navbar />
      <Hero/>
      <Facilities/>
      <TransformSection/>
      <PedagogySection/>
      <GoalSection/>
      <WallOfHonor/>
      <CourseFeeSection/>
      <FeePolicySection/>
      <FacultyCarousel/>
      <TestimonialSection/>
      <CTASection/>
      <Footer/>
    </main>
  );
}
