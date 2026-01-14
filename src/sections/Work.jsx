import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import projects from "../components/ProjectsData";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const Work = () => {
  const workRef = useRef(null);
  const projectRef = useRef(null);
  useGSAP(() => {
    const projectsWidth = projectRef.current.scrollWidth;
    const scrollDistance = projectsWidth - window.innerWidth;

    gsap.to(projectRef.current, {
      x: -scrollDistance,
      ease: "linear",
      scrollTrigger: {
        trigger: workRef.current,
        start: "center center",
        end: () => `+=${projectsWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  });
  return (
    <>
      <div
        id="projects"
        ref={workRef}
        className="h-screen bg-white text-black py-24 lg:py-40 overflow-hidden"
      >
        {/* title wrapper */}
        <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h3 className="mb-3">Selected Work</h3>
            <p className="text-lg lg:text-xl">
              A showcase of my recent projects, highlighting my skills.
            </p>
          </div>
          {/* <GradientButton text="Explore All" link="#" className="btn-light" /> */}
        </div>
        {/* project wrapper */}
        <div ref={projectRef}>
          <div className="flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
            {projects.map((project) => (
              <a
                href={project.link}
                className="relative rounded-2xl w-full min-w-85 lg:min-w-xl h-64 lg:h-96 block overflow-hidden group"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">
                  {project.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
