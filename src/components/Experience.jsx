"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".experience-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className='py-32 bg-background relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute inset-0 bg-speed-lines opacity-20 pointer-events-none'></div>

      <div className='max-w-7xl mx-auto px-6'>
        <h2 className='text-6xl font-bold text-transparent text-stroke mb-16 uppercase tracking-wider text-center md:text-left'>
          Combat <span className='text-primary anime-text-glow'>Logs</span>
        </h2>

        <div className='relative border-l-2 border-zinc-800 ml-4 md:ml-10 pl-8 md:pl-16 py-8 space-y-16'>
          {/* Timeline Item */}
          <div className='experience-card relative'>
            {/* Timeline Dot */}
            <div className='absolute -left-[41px] md:-left-[73px] top-6 w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center'>
              <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
            </div>

            {/* Content Card */}
            <div className='relative group'>
              <div className='absolute inset-0 bg-primary/20 transform translate-x-2 translate-y-2 clip-path-polygon border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='bg-secondary/40 border border-white/10 p-8 clip-path-polygon backdrop-blur-sm hover:border-primary/50 transition-all duration-300 anime-border'>
                <div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
                  <h3 className='text-3xl font-bold text-white uppercase font-heading tracking-wide'>
                    Software Engineer
                  </h3>
                  <span className='text-accent font-mono text-sm border border-accent/30 px-3 py-1 bg-accent/10 mt-2 md:mt-0 inline-block w-fit'>
                    Dec 2023 - Jan 2026
                  </span>
                </div>
                <h4 className='text-xl text-zinc-400 mb-6 font-body'>
                  <span className='text-primary'>@</span> HidayahLab
                </h4>
                <p className='text-zinc-300 leading-relaxed font-body'>
                  Architected and deployed production-grade SaaS platforms and
                  LMS systems serving active user bases. Built scalable backends
                  using
                  <span className='text-primary font-bold'> NestJS</span>,{" "}
                  <span className='text-secondary font-bold text-violet-400'>
                    PostgreSQL
                  </span>
                  ,
                  <span className='text-secondary font-bold text-violet-400'>
                    {" "}
                    MySQL
                  </span>
                  , and{" "}
                  <span className='text-accent font-bold'>Drizzle ORM</span>.
                  Integrated complex features including{" "}
                  <span className='text-white font-bold'>Google Meet API</span>{" "}
                  and secure
                  <span className='text-white font-bold'> Payment Systems</span>
                  . Delivered high-performance, interactive experiences using
                  Next.js and React, while championing{" "}
                  <span className='text-accent font-bold'>Code Reviews</span>,{" "}
                  <span className='text-accent font-bold'>Git/GitHub</span>{" "}
                  workflows, and collaborative{" "}
                  <span className='text-white font-bold'>Team Work</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
