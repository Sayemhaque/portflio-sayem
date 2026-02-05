"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useRef, useState } from "react";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const container = useRef(null);
  const [activeProject, setActiveProject] = useState(null);

  useGSAP(
    () => {
      const triggers = []; // Store triggers to clean them up if needed

      // Create a ScrollTrigger for EACH project detail block
      projects.forEach((project, index) => {
        const trigger = ScrollTrigger.create({
          trigger: `#project-details-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveProject(index),
          onEnterBack: () => setActiveProject(index),
          onLeaveBack: () => {
            if (index === 0) setActiveProject(null);
          },
          // markers: true, // Debugging
        });
        triggers.push(trigger);
      });

      return () => {
        triggers.forEach((t) => t.kill());
      };
    },
    { scope: container, dependencies: [projects] },
  ); // Re-run if projects change

  return (
    <section
      ref={container}
      name='works'
      className='bg-black text-white relative'>
      {/* Split Screen Layout */}
      <div className='flex flex-col md:flex-row'>
        {/* LEFT: Scrollable Content */}
        <div className='w-full md:w-[45%] lg:w-[40%] flex flex-col z-10 relative bg-black'>
          {/* Header - Stays inside the flow or could be sticky too, but let's keep it simple at top */}
          <div className='px-6 md:px-12 py-24 md:h-screen flex flex-col justify-center border-b border-white/10 md:border-none'>
            <div className='mb-4'>
              <span className='text-primary font-bold tracking-widest uppercase flex items-center gap-2'>
                <span className='w-10 h-[1px] bg-primary'></span>
                Portfolio
              </span>
            </div>
            <h2 className='text-6xl md:text-8xl font-bold leading-none mb-8'>
              Selected <br /> Works<span className='text-primary'>.</span>
            </h2>
            <p className='text-zinc-500 text-lg max-w-sm leading-relaxed'>
              A curated selection of projects that demonstrate my passion for
              building high-quality software.
            </p>
          </div>

          {/* Project Details List */}
          <div className='flex flex-col'>
            {projects.map((project, index) => (
              <div
                key={project.id}
                id={`project-details-${index}`}
                className='min-h-screen flex flex-col justify-center px-6 md:px-12 py-24 border-t border-white/10 md:border-r md:border-white/5 bg-black'>
                <span className='text-8xl font-bold text-white/5 font-mono mb-6 block'>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className='text-4xl md:text-5xl font-bold text-white mb-6 group-hover:text-primary transition-colors'>
                  {project.title}
                </h3>

                <div className='flex flex-wrap gap-2 mb-8'>
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className='px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-zinc-300 border border-white/5'>
                      {tech}
                    </span>
                  ))}
                </div>

                <p className='text-zinc-400 text-lg leading-relaxed mb-10 max-w-md'>
                  {project.details}
                </p>

                <div className='flex gap-6'>
                  <a
                    href={project.liveLink}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300'>
                    <ExternalLink size={18} /> Live Site
                  </a>
                  <a
                    href={project.githubLinkClient}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:border-white hover:bg-white/5 transition-all duration-300'>
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer / More Works Link */}
          <div className='px-6 md:px-12 py-32 flex items-center justify-center border-t border-white/10 md:border-r md:border-white/5'>
            <a
              href='https://github.com/Sayemhaque'
              target='_blank'
              className='group flex items-center gap-4 text-3xl font-bold text-zinc-500 hover:text-white transition-colors'>
              View All Projects
              <span className='p-4 rounded-full bg-white/5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 text-white'>
                <ArrowUpRight size={32} />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: Sticky Image Container (Hidden on mobile, visible on desktop) */}
        <div className='hidden md:block w-full md:w-[55%] lg:w-[60%] sticky top-0 h-screen overflow-hidden bg-zinc-900/50'>
          <div className='relative w-full h-full'>
            {/* Background Blur/Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-20 mix-blend-overlay"></div>

            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  activeProject === index ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}>
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10' />
                <img
                  src={project.img.src}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-[1.5s] ease-out ${
                    activeProject === index ? "scale-100" : "scale-110"
                  }`}
                />

                {/* Floating Details on Image? Optional, maybe just keep clean */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
