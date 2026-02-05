"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { aiSkills, backednSkills, exploring, frontedSkills } from "../data";

gsap.registerPlugin(ScrollTrigger);

const SkillRow = ({ category, skills, index }) => {
  const rowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      ref={rowRef}
      className='skill-row border-t border-white/10 group relative py-12 transition-all duration-500 hover:bg-white/5'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className='flex flex-col md:flex-row gap-8 md:items-start'>
        {/* Category Header */}
        <div className='md:w-1/3 flex flex-col justify-between'>
          <div className='flex items-center gap-4'>
            <span className='text-xs font-mono text-zinc-600'>
              0{index + 1}
            </span>
            <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300'>
              {category}
            </h3>
          </div>
          <div
            className={`mt-4 w-12 h-1 bg-primary transform origin-left transition-transform duration-500 ${isHovered ? "scale-x-100" : "scale-x-0"}`}
          />
        </div>

        {/* Skills List */}
        <div className='md:w-2/3'>
          <div className='flex flex-wrap gap-x-8 gap-y-4'>
            {skills.map((skill, i) => (
              <div
                key={skill.id}
                className='flex items-center gap-2 group/item cursor-default'>
                <span className='w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/row:bg-primary transition-colors duration-300'></span>
                <span className='text-lg md:text-xl text-zinc-400 group-hover/item:text-white transition-colors duration-300'>
                  {skill.name}
                </span>
                <span className='opacity-0 -ml-2 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all duration-300 text-primary'>
                  <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const container = useRef();

  useGSAP(
    () => {
      const rows = gsap.utils.toArray(".skill-row");

      rows.forEach((row, index) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: index * 0.1, // Manual stagger
          ease: "power3.out",
        });
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      name='skills'
      className='py-32 bg-black text-white px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-24 md:mb-32'>
          <p className='text-primary font-bold tracking-widest uppercase mb-4 flex items-center gap-2'>
            <span className='w-10 h-[1px] bg-primary'></span>
            Capabilities
          </p>
          <h2 className='text-5xl md:text-7xl font-bold leading-tight'>
            Technical <span className='text-zinc-700'>Proficiency.</span>
          </h2>
        </div>

        <div className='flex flex-col border-b border-white/10'>
          <SkillRow
            category='Frontend Engineering'
            skills={frontedSkills}
            index={0}
          />
          <SkillRow
            category='Backend Systems'
            skills={backednSkills}
            index={1}
          />
          <SkillRow category='AI & Intelligence' skills={aiSkills} index={2} />
          <SkillRow category='Exploring Now' skills={exploring} index={3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
