import BrandStrip from "@/components/BrandStrip";
import CTA from "@/components/CTA";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Inspire from "@/components/Inspire";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Trainers from "@/components/Trainers";
import Workouts from "@/components/Workouts";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-black">
      <Navbar />
      <Hero />
      <BrandStrip />
      <Inspire />
      <Features />
      <Workouts />
      <Experience />
      <Trainers />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
