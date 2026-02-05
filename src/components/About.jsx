"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import AboutImg from "./../images/profile-pic (11).png";

const About = () => {
  const container = useRef();

  useGSAP(
    () => {
      const elements = gsap.utils.toArray(".reveal-text");
      elements.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          scrub: 1,
        },
        y: 100,
        scale: 0.9,
        ease: "none",
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      name='about'
      className='relative py-32 bg-secondary text-white overflow-hidden about-container'>
      <div className='absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none transform -translate-y-1/2' />

      <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center'>
        {/* Text Side */}
        <div className='order-2 md:order-1 space-y-8'>
          <h2 className='reveal-text text-xl text-primary uppercase tracking-widest font-bold'>
            Who I Am
          </h2>
          <h3 className='reveal-text text-4xl md:text-5xl font-bold leading-tight'>
            Code is my canvas, <br />
            <span className='text-zinc-500'>browsers are my gallery.</span>
          </h3>
          <div className='reveal-text space-y-6 text-zinc-400 text-lg leading-relaxed'>
            <p>
              Hello! I'm Sayem. My journey began in 2021 with a curiosity for
              how things work on the web. Fast forward to today, and I've had
              the privilege of building software for various clients, always
              pushing the boundaries of what's possible with modern web
              technologies.
            </p>
            <p>
              I don't just write code; I solve problems. Whether it's
              optimization, user experience, or architectural design, I bring a
              detail-oriented focus to every project.
            </p>
          </div>

          <div className='reveal-text flex gap-8 pt-4'>
            <div>
              <span className='block text-4xl font-bold text-white'>3+</span>
              <span className='text-sm text-zinc-500 uppercase tracking-widest'>
                Years Exp.
              </span>
            </div>
            <div>
              <span className='block text-4xl font-bold text-white'>50+</span>
              <span className='text-sm text-zinc-500 uppercase tracking-widest'>
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className='order-1 md:order-2 relative'>
          <div className='about-img relative z-10 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700'>
            <img
              src={AboutImg.src}
              alt='About Sayem'
              className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700'
            />
            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60'></div>
          </div>
          {/* Decorative frame */}
          <div className='absolute -bottom-6 -right-6 w-full h-full border border-zinc-700 z-0 hidden md:block'></div>
        </div>
      </div>
    </section>
  );
};

export default About;
