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

      tl.from(["#w1", "#w2", "#w3", "#w4", "#w5", "#w6", "#w7", "#w8", "#w9"], {
        y: 200,
        delay: 0.5,
        duration: 0.5,
        stagger: {
          amount: 0.5,
          from: "center",
        },
      });
      tl.from("#first-span", {
        y: 200,
        delay: 1,
        duration: 1,
        stagger: 0.5,
      });
      tl.to(["#w1", "#w6"], {
        rotateX: 540,
        duration: 2,
        repeatDelay: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
      tl.to(["#w3", "#w8"], {
        rotateY: 360,
        duration: 1,
        repeatDelay: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
      tl.to("#rotate-para", {
        rotateZ: 10,
        duration: 1,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
        ease: "back.inOut",
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
      const tl2 = gsap.timeline();
      tl2.to("#I", {
        rotateX: 540,
        duration: 2,
        repeatDelay: 1,
        repeat: -1,
        yoyo: true,
      });
      tl2.to("#question-mark", {
        rotateY: 360,
        duration: 1,
        repeatDelay: 1,
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: container }
  );

  return (
    <main ref={container} className="flex flex-col overflow-hidden ">
      {/* first part */}
      <div
        id="first-part"
        className="flex items-center h-screen w-full flex-col mt-40"
      >
        <h1 className="relative text-3xl text-green-500 p-2 md:text-8xl font-bold overflow-hidden flex flex-row items-center justify-center mb-20 border-2 border-white rounded-lg">
          <span id="w1">W</span>
          <span id="w2">elcome</span>
          <span id="w3">T</span>
          <span id="w4">o</span>
          <span id="w5">M</span>
          <span id="w6">Y</span>
          <span id="w7">Port</span>
          <span id="w8">f</span>
          <span id="w9">olio</span>
        </h1>

        {intro.map((item, index) => (
          <p
            id="rotate-para"
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
          What{" "}
          <span id="I" className="inline-block ">
            i
          </span>{" "}
          Do
          <span id="question-mark" className="inline-block">
            ?
          </span>
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
    </main>
  );
}
