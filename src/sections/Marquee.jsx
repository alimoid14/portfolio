import React from "react";
import gryphon from "../assets/gryphon.svg";

const Marquee = () => {
  return (
    <>
      <div className="bg-white text-black pb-28 lg:pb-44 overflow-hidden">
        {/* row 1 */}
        <div className="whitespace-nowrap animate-marquee text-6xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight mb-4">
          <span className="flex gap-4 lg:gap-8 mx-8">
            DEVELOP{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
            INTEGRATE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
            OPTIMIZE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
            DEVELOP{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
            INTEGRATE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
            OPTIMIZE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-1 w-[7vw]"
            />
          </span>
        </div>
        {/* row 2 */}
        <div className="whitespace-nowrap animate-marquee-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight">
          <span className="flex gap-4 lg:gap-8 mx-8">
            DEVELOP{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
            INTEGRATE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
            OPTIMIZE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
            DEVELOP{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
            INTEGRATE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
            OPTIMIZE{" "}
            <img
              src={gryphon}
              alt="Gryphon"
              className="marquee-gryphon-2 w-[7vw]"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Marquee;
