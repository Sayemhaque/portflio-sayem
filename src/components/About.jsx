"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const container = useRef();
  const [quote, setQuote] = useState({ text: "", author: "" });

  const quotes = [
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde",
    },
    {
      text: "Code is like humor. When you have to explain it, it’s bad.",
      author: "Cory House",
    },
    {
      text: "Simplicity is the soul of efficiency.",
      author: "Austin Freeman",
    },
    {
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck",
    },
  ];

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

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

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

          <div className='reveal-text grid grid-cols-2 gap-6 pt-4'>
            <div>
              <span className='block text-4xl font-bold text-white'>2y+</span>
              <span className='text-sm text-zinc-500 uppercase tracking-widest'>
                Years Exp.
              </span>
            </div>
            <div>
              <span className='block text-4xl font-bold text-white'>4</span>
              <span className='text-sm text-zinc-500 uppercase tracking-widest'>
                Real World Projects
              </span>
            </div>
            <div className='col-span-2'>
              <span className='block text-4xl font-bold text-white'>20+</span>
              <span className='text-sm text-zinc-500 uppercase tracking-widest'>
                Hobby Projects
              </span>
            </div>
          </div>

          {/* Random Quote Section */}
          <div className='reveal-text pt-6 border-t border-zinc-800 mt-6'>
            <figure>
              <blockquote className='text-xl italic font-serif text-zinc-300'>
                "{quote.text}"
              </blockquote>
              <figcaption className='mt-2 text-primary font-medium'>
                — {quote.author}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Visual Side - Cyber Interface */}
        <div className='order-1 md:order-2 relative flex justify-center'>
          <div className='relative w-full max-w-md aspect-square bg-black/50 border border-primary/30 p-2 anime-border'>
            {/* Inner Content - Code/Data Visualization */}
            <div className='w-full h-full bg-secondary/20 relative overflow-hidden group'>
              <div className='absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,127,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]'></div>

              {/* Decorative Lines */}
              <div className='absolute top-0 left-0 w-full h-[1px] bg-primary/50 shadow-[0_0_10px_var(--primary)]'></div>
              <div className='absolute bottom-0 right-0 w-full h-[1px] bg-accent/50 shadow-[0_0_10px_var(--accent)]'></div>

              {/* Central Graphic (Abstract Tech) */}
              <div className='absolute inset-0 flex items-center justify-center'>
                <div className='w-32 h-32 border-2 border-primary rotate-45 flex items-center justify-center anime-text-glow'>
                  <div className='w-24 h-24 border border-accent rotate-90'></div>
                </div>
              </div>

              {/* Access Granted Text */}
              <div className='absolute bottom-4 right-4 font-mono text-xs text-accent animate-pulse'>
                SYSTEM_STATUS: ONLINE
              </div>
            </div>

            {/* Corner Accents */}
            <div className='absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary'></div>
            <div className='absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
