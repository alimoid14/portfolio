import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const runSplit = () => {
        const split = SplitText.create(".about-text", {
          type: "lines, words",
        });

        gsap.set(split.words, { opacity: 0.3 });

        gsap.to(split.words, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      };

      // wait for fonts + layout to prevent weird line breaks
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(runSplit);
        });
      });
    },
    { scope: aboutRef }
  );

  return (
    <div
      id="about"
      ref={aboutRef}
      className="relative z-10 min-h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]"
    >
      <div className="main-container py-4 lg:py-12 h-full flex flex-col gap-6 md:gap-8 justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl">
        <p className="about-text max-w-4xl leading-relaxed text-center">
          I build web apps using modern technologies like React, Node.js,
          Tailwind CSS, and more. My focus is on creating responsive,
          user-friendly interfaces that provide seamless experiences across all
          devices. Whether it's a simple landing page or a complex web
          application, I am passionate about turning ideas into reality through
          code. Adding a bit of SEO as well, and I am ready to take your project
          to the next level.
        </p>
      </div>
    </div>
  );
};

export default About;
