import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row gap-6 ">
      <div className="mt-6">
        <div className="font-brimestone text-xl mb-6 text-neutral-800">
          WORK
        </div>
        <Hero />
      </div>
      <div className="mt-6 w-full">
        <div className="font-brimestone text-xl mb-6 text-neutral-800">
          ABOUT
        </div>
        <AboutSection />
      </div>
    </section>
  );
}
