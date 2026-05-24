"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Client-only components (browser APIs)
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });
const ParticleBackground = dynamic(() => import("@/components/ParticleBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <ParticleBackground />

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <TechStack />
          <Portfolio />
          <Testimonials />
          <Process />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
