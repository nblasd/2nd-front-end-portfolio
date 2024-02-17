"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const intro = [
  `I'm Shoaib, a self-taught web developer passionate about creating,`,
  `engaging and dynamic web experiences. Currently, I'm honing my`,
  `skills, in full-stack development while specializing in front-end technologies,`,
];

const text = "Welcome to My Portfolio";
const textArr = text.split(" ");
export default function Hero() {
  const container = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline();
      tl.to("#second-part", {
        scrollTrigger: {
          trigger: "#first-part",
          start: "top 300px",
          scrub: true,
          pinSpacing: false,
          pin: true,
        },
        y: -100,
      });

      tl.from("#welcome", {
        y: 200,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.5,
      });
      tl.from("#first-span", {
        y: 200,
        delay: 1,
        duration: 1,
        stagger: 0.5,
      });
      gsap.from(["#what", "#para2", "#para4"], {
        scrollTrigger: {
          trigger: "#second-part",
          start: "top 700px",
          end: "top 100px",
          scrub: 1,
        },
        xPercent: -100,
      });
      gsap.from(["#para1", "#para3"], {
        scrollTrigger: {
          trigger: "#second-part",
          start: "top 700px",
          end: "top 100px",
          scrub: 1,
        },
        xPercent: 100,
      });
      // gsap.to("#third-part", {
      //   scrollTrigger: {
      //     trigger: "#second-part",
      //     start: "center center",
      //     markers: true,
      //     scrub: true,
      //   },
      //   yPercent: -200,
      // });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex flex-col overflow-hidden ">
      {/* first part */}
      <div
        id="first-part"
        className="flex items-center h-screen w-full flex-col mt-52"
      >
        <h1 className="text-3xl text-green-500 p-2 md:text-8xl font-bold overflow-hidden flex flex-row items-center justify-center mb-20">
          {textArr.map((text, index) => (
            <p key={index} id="welcome" className="mx-1">
              {text}
            </p>
          ))}
        </h1>

        {intro.map((item, index) => (
          <p
            key={index}
            className="md:text-2xl text-gray-400 w-[90%] md:max-w-screen-md overflow-hidden"
          >
            <span id="first-span" className="inline-block">
              {item}
            </span>
          </p>
        ))}
      </div>
      {/* second part */}
      <div
        id="second-part"
        className="flex items-center w-full bg-[#0C2D57] min-h-screen justify-center flex-col gap-10 text-[#FC6736]"
      >
        <h1 id="what" className="text-5xl md:text-8xl font-bold">
          What I Do?
        </h1>
        <p
          id="para1"
          className="text-lg md:text-2xl w-[90%] md:max-w-screen-md text-gray-400"
        >
          I design and build modern, responsive websites and web applications
        </p>
        <p
          id="para2"
          className="text-lg md:text-2xl w-[90%] md:max-w-screen-md text-gray-400"
        >
          that not only look great but also provide a seamless user experience.
        </p>
        <p
          id="para3"
          className="text-lg md:text-2xl w-[90%] md:max-w-screen-md text-gray-400"
        >
          From concept to deployment, I love turning ideas into reality using
        </p>
        <p
          id="para4"
          className="text-lg md:text-2xl w-[90%] md:max-w-screen-md text-gray-400"
        >
          the latest tools and technologies.
        </p>
      </div>
      {/* third part */}
      {/* <div id="third-part" className="min-h-screen bg-[#1F2544] text-[#81689D]">
        <h1>My Portfolio</h1>
        <p>
          Check out some of my recent projects below. Each one showcases my
          attention to detail, creativity, and dedication to delivering
          high-quality work. Feel free to explore and see what I can do.
        </p>
      </div> */}
    </main>
  );
}
