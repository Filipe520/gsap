"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Carrosel() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const boxes = divRef.current ? divRef.current.querySelectorAll(".box") : [];

    gsap.to(boxes, {
      scrollTrigger: {
        trigger: boxes,
        // top center bottom
        // 20% 80%
        start: "top center",
        // end: "bottom 100px",
        end: "top 100px",
        scrub: 2,
        markers: true,
        // as palavras chaves do toggleActions:
        //  play, pause, resume, reverse, restart, reset, complete, none
        toggleActions: "restart pause reverse pause",
      },
      duration: 10,
      scale: 1.5,
      ease: "power1.out",
      borderRadius: 20,
    });
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className=" m-2 rounded-2xl flex flex-col gap-2" ref={divRef}>
        {[
          "lemore",
          "cabra",
          "cachorro",
          "corujas",
          "flamingo",
          "girafa",
          "leopardo",
          "pato",
          "veado",
        ].map((imagem, index) => (
          <Image
            src={`/${imagem}.jpg`}
            alt={`Imagem de uma ${imagem[index]}`}
            width={500}
            height={500}
            className={index === 4 ? "box rounded-2xl" : ""}
            key={index}
          />
        ))}
      </div>
    </main>
  );
}
