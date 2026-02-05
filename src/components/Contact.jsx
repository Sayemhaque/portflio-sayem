"use client";
import emailjs from "@emailjs/browser";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".contact-anim", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mbdl6gb",
        "template_0w5u9wm",
        form.current,
        "FmuWHH0cUUyzPLKSf",
      )
      .then(
        (result) => {
          alert("Message sent successfully!"); // Using simple alert for now, can be upgraded to toast
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        },
      );
  };

  return (
    <section
      ref={container}
      name='contact'
      className='py-32 bg-black text-white px-6 relative overflow-hidden'>
      {/* Gradient Orbs */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none' />

      <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-20'>
        {/* Info Side */}
        <div className='space-y-12'>
          <div className='contact-anim'>
            <p className='text-primary font-bold tracking-widest uppercase mb-4'>
              Contact
            </p>
            <h2 className='text-5xl md:text-7xl font-bold leading-tight'>
              Let's start a <br />
              <span className='text-zinc-600'>project together.</span>
            </h2>
          </div>

          <div className='contact-anim space-y-2 text-zinc-400'>
            <p className='text-lg'>Have a vision for your next project?</p>
            <p className='text-lg'>
              I'm available for freelance work and open to new opportunities.
            </p>
          </div>

          <div className='contact-anim'>
            <h3 className='text-xl font-bold text-white mb-6'>Connect</h3>
            <div className='flex gap-6'>
              <a
                href='https://www.linkedin.com/in/md-sayem-mia-2a665623a/'
                target='_blank'
                className='p-4 border border-zinc-800 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300'>
                <Linkedin size={20} />
              </a>
              <a
                href='https://twitter.com/Mdsayem999/'
                target='_blank'
                className='p-4 border border-zinc-800 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300'>
                <Twitter size={20} />
              </a>
              <a
                href='https://www.instagram.com/iamsayem777/'
                target='_blank'
                className='p-4 border border-zinc-800 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300'>
                <Instagram size={20} />
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=100086182577309'
                target='_blank'
                className='p-4 border border-zinc-800 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all duration-300'>
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className='contact-anim bg-zinc-900/30 backdrop-blur-sm p-8 md:p-12 border border-white/5 rounded-sm'>
          <form ref={form} onSubmit={sendEmail} className='space-y-8'>
            <div className='space-y-2'>
              <label className='text-sm font-bold uppercase tracking-wider text-zinc-500'>
                Name
              </label>
              <input
                required
                type='text'
                name='from_name'
                className='w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg placeholder-zinc-800'
                placeholder='Your name'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold uppercase tracking-wider text-zinc-500'>
                Email
              </label>
              <input
                required
                type='email'
                name='from_email'
                className='w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg placeholder-zinc-800'
                placeholder='your@email.com'
              />
            </div>
            <div className='space-y-2'>
              <label className='text-sm font-bold uppercase tracking-wider text-zinc-500'>
                Message
              </label>
              <textarea
                required
                name='message'
                rows={4}
                className='w-full bg-transparent border-b border-zinc-700 py-4 text-white focus:outline-none focus:border-primary transition-colors text-lg placeholder-zinc-800 resize-none'
                placeholder='Tell me about your project...'
              />
            </div>

            <button className='w-full bg-white text-black font-bold uppercase tracking-widest py-6 hover:bg-primary hover:text-white transition-all duration-500 flex justify-center items-center gap-2 group'>
              Send Message{" "}
              <Send
                size={18}
                className='transform group-hover:translate-x-1 transition-transform'
              />
            </button>
          </form>
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-32 pt-12 border-t border-zinc-900 text-center text-zinc-600 text-sm uppercase tracking-widest'>
        <p>
          &copy; {new Date().getFullYear()} Mohammad Sayem. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
