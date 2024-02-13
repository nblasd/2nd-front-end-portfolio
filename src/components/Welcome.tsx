"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/store/store";

interface propsType {
  text: string[];
  margin: number;
}
export default function Welcome({ text, margin }: propsType) {
  const isClicked = useStore((state) => state.isClicked);
  const container = React.useRef(null);

  useGSAP(
    () => {
      gsap.from(".welcome", {
        y: -200,
        duration: 1,
        ease: "back.inOut",
        stagger: {
          amount: 1.5,
          from: "random",
        },
      });
    },
    { scope: container }
  );

  useGSAP(() => {
    if (isClicked) {
      gsap.to(".welcome", {
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "back.inOut",
        stagger: {
          amount: 1.5,
          from: "random",
        },
      });
    }
  }, [isClicked]);

  return (
    <div ref={container} className="overflow-hidden">
      {text.map((elem, index) => (
        <h1 className={`welcome inline-block mx-${margin}`} key={index}>
          {elem}
        </h1>
      ))}
    </div>
  );
}
