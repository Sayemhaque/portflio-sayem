"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useGSAP(
    () => {
      const cursor = cursorRef.current;
      const follower = followerRef.current;

      // Hide default cursor (if not handled by global css)
      // document.body.style.cursor = 'none';

      // Center the elements initially to avoid jumping
      gsap.set(cursor, { xPercent: -50, yPercent: -50 });
      gsap.set(follower, { xPercent: -50, yPercent: -50 });

      const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
      const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

      const xToFollower = gsap.quickTo(follower, "x", {
        duration: 0.6,
        ease: "power3",
      });
      const yToFollower = gsap.quickTo(follower, "y", {
        duration: 0.6,
        ease: "power3",
      });

      const onMouseMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
        xToFollower(e.clientX);
        yToFollower(e.clientY);
      };

      window.addEventListener("mousemove", onMouseMove);

      // Add hover effect for links and buttons
      const hoverables = document.querySelectorAll(
        "a, button, .cursor-pointer",
      );

      const onMouseEnter = () => {
        gsap.to(cursor, { scale: 0 });
        gsap.to(follower, {
          scale: 3,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          mixBlendMode: "difference",
        });
      };

      const onMouseLeave = () => {
        gsap.to(cursor, { scale: 1 });
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          mixBlendMode: "normal",
        });
      };

      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        hoverables.forEach((el) => {
          el.removeEventListener("mouseenter", onMouseEnter);
          el.removeEventListener("mouseleave", onMouseLeave);
        });
      };
    },
    { scope: cursorRef },
  ); // Scope mainly for cleanup, though window listeners are global

  return (
    <>
      <div
        ref={cursorRef}
        className='fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block' // Hidden on mobile
      />
      <div
        ref={followerRef}
        className='fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[9998] transition-colors duration-300 hidden md:block'
      />
    </>
  );
};

export default Cursor;
