"use client";

import { Navbar } from "@/components/blocks/navbar";
import About from "@/components/sections/about";
import Footer from "@/components/sections/footer";
import TechnicalSkills from "@/components/sections/technical-skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <TechnicalSkills />
      <Footer />
    </>
  );
}
