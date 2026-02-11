"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
