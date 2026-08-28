import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";
import { Work } from "@/components/sections/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Research />
      <Skills />
      <Contact />
    </>
  );
}
