import Navbar from "@/components/blocks/navbar/navbar";
import Blogs from "@/components/sections/blogs";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}
