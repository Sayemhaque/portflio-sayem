"use client";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";

const Home = () => {
  return (
    <div className=''>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
