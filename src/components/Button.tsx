"use client";
import React from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MoveRight } from "lucide-react";
import { useStore } from "@/store/store";

export default function Button() {
  const [isHovered, setIsHovered] = React.useState(false);
  const para = React.useRef(null);
  const btn = React.useRef(null);
  const whitebg = React.useRef(null);
  const router = useRouter();

  const isClicked = useStore((state) => state.isClicked);
  const setISClicked = useStore((state) => state.setIsClicked);

  useGSAP(() => {
    gsap.from([btn.current, para.current], {
      x: -200,
      delay: 0.5,
      duration: 1,
      stagger: 0.5,
    });
  });

  useGSAP(() => {
    if (isHovered) {
      gsap.to(whitebg.current, {
        height: 50,
        width: 150,
        duration: 0.5,
      });
    } else {
      gsap.to(whitebg.current, {
        height: 0,
        width: 0,
        duration: 0.5,
      });
    }
  }, [isHovered]);

  useGSAP(() => {
    if (isClicked) {
      gsap.to([para.current, btn.current], {
        x: -200,
        delay: 1.2,
        duration: 1,
        stagger: 0.5,
        onComplete: () => {
          router.push("/home");
        },
      });
    }
  }, [isClicked]);

  return (
    <main className="overflow-hidden">
      <div
        ref={btn}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={setISClicked}
        className="px-3 py-2 rounded-lg border border-white mt-10 cursor-pointer relative overflow-hidden "
      >
        <p
          ref={para}
          className="flex flex-row items-center justify-center gap-2 "
        >
          Let&apos;s Go
          <span className="animate-pulse">
            <MoveRight />
          </span>
        </p>
        <div
          ref={whitebg}
          className="absolute -z-10 rounded-lg bg-white  bottom-0 left-0"
        ></div>
      </div>
    </main>
  );
}
