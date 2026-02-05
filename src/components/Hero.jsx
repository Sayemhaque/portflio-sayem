"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import HeroImg from "./../images/profile-pic (9).png";

const Hero = () => {
  const container = useRef();
  const titleRef = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(titleRef.current.children, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        delay: 0.2,
      })
        .from(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1",
        )
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5",
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      name='home'
      className='relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20'>
      {/* Background Gradients */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none' />
      <div className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full z-10'>
        {/* Text Content */}
        <div ref={titleRef} className='flex flex-col space-y-4'>
          <p className='text-primary font-medium tracking-widest uppercase text-sm'>
            Based in Bangladesh
          </p>
          <h1 className='text-6xl md:text-8xl font-bold font-heading text-white leading-tight mix-blend-normal'>
            Creative <br />
            <span className='text-zinc-500'>Developer.</span>
          </h1>
          <p className='text-zinc-400 max-w-lg text-lg leading-relaxed pt-4'>
            I craft digital experiences that merge art, code, and user
            interaction. Passionate about building software that matters.
          </p>

          <div className='hero-btn pt-8 flex gap-6'>
            <a
              href='/assets/mdsayemResume.pdf'
              download='Resume'
              className='group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden'>
              <span className='relative z-10 group-hover:text-white transition-colors duration-300'>
                Download CV
              </span>
              <div className='absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
            </a>
            <button className='px-8 py-4 border border-zinc-800 text-white font-bold uppercase tracking-wider hover:bg-zinc-900 transition-all duration-300'>
              Contact Me
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className='relative flex justify-center md:justify-end'>
          <div className='relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]'>
            {/* Abstract Shapes/Circle behind */}
            <div className='absolute inset-0 border border-zinc-800 rounded-full animate-spin-slow opacity-30'></div>
            <div className='absolute inset-4 border border-zinc-700/30 rounded-full'></div>

            <img
              src={HeroImg.src}
              className='relative z-10 w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-out'
              alt='Mohammad Sayem'
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500'>
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
