"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const links = [
  {
    text: "home",
    href: "/home",
  },
  {
    text: "about me",
    href: "/",
  },
  {
    text: "projects",
    href: "/",
  },
  {
    text: "contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const container = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(["#logo", "#links"], {
        y: -200,
        duration: 1,
        stagger: 0.3,
        ease: "back.inOut",
      });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      className="fixed z-10 top-0 text-slate-300  h-20 flex items-center justify-between w-full px-5"
    >
      <Image
        id="logo"
        className="rounded-full"
        src={"/logo/logo.jpeg"}
        width={50}
        height={50}
        alt="logo"
      ></Image>

      <div className="flex items-center justify-center gap-8">
        {links.map((li, index) => (
          <div id="links" key={index}>
            <Link
              className="uppercase hover:bg-white p-4 hover:text-black duration-500 rounded-full"
              href={li.href}
            >
              {li.text}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
