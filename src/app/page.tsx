"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function App() {
  const divRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".card", { position: "absolute" });

    gsap.from(".card", {
      yPercent: -100,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".card",
        markers: true,
        start: "top top",
        scrub: true,
        pin: true,
        end: "+=200px",
      },
    });
  });

  return (
    <main className=" bg-black flex items-center justify-center flex-col">
      <section className="relative bg-gray-900 w-full h-dvh flex items-center justify-center">
        <div className="card bg-gradient-to-bl w-50 h-50 bg-amber-800 border border-amber-300 absolute transform translate-y-10"></div>
        <div className="card bg-gradient-to-bl w-50 h-50 bg-blue-800 border border-amber-300 absolute transform translate-y-20"></div>
        <div className="card bg-gradient-to-bl w-50 h-50 bg-red-800 border border-amber-300 absolute transform translate-y-30"></div>
      </section>

      <div className="h-dvh bg-white"></div>
    </main>
  );
}
