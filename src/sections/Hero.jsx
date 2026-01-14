import React, { useRef } from "react";
import GradientButton from "../components/GradientButton";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = () => {
  const heroRef = useRef(null);

  //pin hero section

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      SplitText.create("h1", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
          });
        },
      });

      SplitText.create("h2", {
        type: "lines, words",
        mask: "lines",
        autoSplit: true,
        onSplit(self) {
          gsap.from(self.words, {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            delay: 0.3,
          });
        },
      });

      gsap.from(".gradient-btn", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        delay: 1,
        ease: "power2.out",
      });

      gsap.from(".gryphon svg", {
        scale: 0,
        rotate: 180,
        opacity: 0,
        transformOrigin: "center center",
        duration: 1.3,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(".gryphon svg", {
            rotate: "360",
            duration: 20,
            repeat: -1,
            ease: "linear",
          });
        },
      });
    },
    { scope: heroRef }
  );
  return (
    <div id="home" ref={heroRef} className="relative overflow-hidden">
      <div className="main-container h-screen flex flex-col items-start lg:justify-center lg:py-12 max-lg:pt-40">
        <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">
          Ali Moid Rizvi
        </h1>
        <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading[1] tracking-tight mt-3 mb-6">
          Full Stack <br />
          <span className="text-stroke">Web Developer</span>
        </h2>
        <GradientButton
          text="Let's Talk"
          link="mailto:syedalimoidrizvi@gmail.com"
          className="gradient-btn"
        />
      </div>
      <div className="gryphon absolute -z-10 top-80 -right-1/4 lg:top-32 lg:-right-3/25">
        <svg
          className="h-[48vh] lg:h-[80vh]"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="colorGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#ff4d6d" />
              <stop offset="25%" stop-color="#bd3eb2" />
              <stop offset="50%" stop-color="#7b2ff7" />
              <stop offset="75%" stop-color="#2f86f7" />
              <stop offset="100%" stop-color="#2ff7ed" />
            </linearGradient>
          </defs>

          <path
            d="m95.514 30.88 2.2361-0.53241 6.176 8.9445-7.8797 0.95834zm14.942 15.727s1.1294-0.37647 1.6565-1.1294 2.9741-0.5647 3.9153 0.52706c-0.97883 1.3929-3.8024 2.2212-5.5718 0.60235zm-1.9272 45.952c2.503 0 4.172-4.1717 4.172-4.1717s12.218 15.872-17.942 23.783c-25.452 6.676-52.573-10.431-52.573-10.431s3.2075 6.324 6.2588 9.596c2.6902 2.885 7.9277 6.26 7.9277 6.26s-0.5672 2.889 0 4.589c0.4172 1.251 37.692 6.463 52.573-6.258 8.297-7.094 10.848-14.186 10.848-18.359 0-14.604-12.934-22.331-20.028-21.28-9.1795 1.3598-4.5898 10.432-4.5898 10.432s0.7937-3.3274 2.5035-3.7552c1.6898-0.4229 3.4869 2.0415 5.3359 4.5782 1.804 2.4744 3.658 5.0177 5.513 5.0177zm12.52-49.235s-0.505 2.4548-2.921 2.0862c-0.388-0.0592-0.91-0.3748-1.492-0.7267-0.58-0.3506-1.22-0.7371-1.846-0.9422-1.72-0.5636-3.338-0.4173-3.338-0.4173s-3.405 2.564-5.841 3.7552c-2.778 1.358-7.5107 2.5035-7.5107 2.5035s0.7418 2.6043 1.669 4.1725c1.0127 1.7121 3.3377 4.1725 3.3377 4.1725h9.597s-0.336 1.8444-0.835 2.9207c-0.494 1.0662-1.669 2.5035-1.669 2.5035s7.301 0 10.849-7.5105c2.957-6.2587 0-12.517 0-12.517zm-113.08-1.669 7.0933-1.669s-4.9612 4.6697-7.0932 8.7622c-3.3952 6.5175-2.0863 18.776-2.0863 18.776l9.1795-14.604s-2.5903 12.234-1.669 20.028c0.7988 6.7577 5.0069 16.69 5.0069 16.69s0.2854-3.0029 1.2518-4.5896c1.0207-1.6757 3.7552-3.3381 3.7552-3.3381l-0.8345 15.855s6.3538 8.2602 11.683 12.1c3.9038 2.813 10.848 5.842 10.848 5.842s-7.0647-9.021-9.1794-15.856c-1.8403-5.948-1.669-15.855-1.669-15.855s2.9088 7.8071 6.6759 11.266c4.0829 3.7483 12.935 5.8416 12.935 5.8416l-3.338-9.1796s5.3861 8.0256 10.431 11.266c5.0449 3.2404 28.373 2.504 28.373 2.504s-3.2678-1.758-5.0069-3.338c-1.714-1.558-3.7553-4.5902-3.7553-4.5902l10.848 2.0863s-15.855-7.9277-13.352-22.948c3.3908-20.345 20.445-20.445 20.445-20.445l-7.0933-9.1793s8.6072 1.0836 13.769-1.669c2.274-1.2123 5.425-3.7554 5.425-3.7554h3.755s-1.77-2.3898-2.504-4.5896c-0.733-2.1997-1.251-6.6761-1.251-6.6761l-2.087 1.669s-3.296-4.8036-5.841-7.5104c-2.5308-2.6911-7.0933-6.2588-7.0933-6.2588v4.5898s-5.3724-3.3365-9.1794-4.5898c-3.1568-1.0392-8.345-1.669-8.345-1.669l2.5035 5.007s-8.025-0.0326-12.935 1.2518c-4.4504 1.1642-10.848 4.5897-10.848 4.5897l6.6759 1.2517s-11.128 3.5135-15.021 9.1796c-2.8668 4.1724 0 26.286 0 26.286l-9.5967-15.438-2.9207 17.107s-2.2657-7.8766-1.669-12.935c0.5252-4.4523 3.7552-10.848 3.7552-10.848l7.0932 10.848s-2.9207-15.021 6.676-28.373c11.09-15.43 23.783-18.776 23.783-18.776s-18.776-7.5853-42.559 6.2587c-13.091 7.62-25.035 29.625-25.035 29.625z"
            fill="none"
            stroke="url(#colorGradient)"
            stroke-width="0.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
