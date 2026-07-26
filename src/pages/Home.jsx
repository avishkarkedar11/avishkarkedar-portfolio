import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Education from "../components/Education/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}