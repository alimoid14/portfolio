import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import GradientButton from "../components/GradientButton";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    SplitText.create(".about-text", {
      type: "lines, words",
      onSplit(self) {
        gsap.set(self.words, {
          opacity: 0.3,
        });

        gsap.to(self.words, {
          opacity: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          },
        });
      },
    });
  });
  return (
    <>
      <div
        id="about"
        ref={aboutRef}
        className="relative z-10 h-screen bg-white rounded-tl-[60px] rounded-tr-[60px]"
      >
        <div className="main-container py-4 lg:py-12 h-full flex flex-col gap-6 md:gap-8 justify-center items-center font-heading text-black text-2xl md:text-3xl xl:text-5xl">
          <p className="about-text leading-tight">
            I build web apps using modern technologies like React, Node.js,
            Tailwind CSS, and more. My focus is on creating responsive,
            user-friendly interfaces that provide seamless experiences across
            all devices. Whether it's a simple landing page or a complex web
            application, I am passionate about turning ideas into reality
            through code. Adding a bit of SEO as well, and I am ready to take
            your project to the next level.
          </p>
          <br />
          {/* <GradientButton
            text="My Resume"
            link="/resume.pdf"
            className="btn-light"
          /> */}
        </div>
      </div>
    </>
  );
};

export default About;
