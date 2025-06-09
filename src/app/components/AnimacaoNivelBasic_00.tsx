"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Navbar from "./models/Navbar";

export default function AnimacaoNivelBasic_00() {
  const helloWordRef = useRef<HTMLHeadingElement>(null); // Vai começar vazio sem nada dentro;
  const newsPaperRef = useRef<HTMLHeadingElement>(null); // Vai começar vazio sem nada dentro;

  // Efeito de bounce.out que faz praticamente, o elemento vem do final do height da página é vai até aonde ele tava na posição original
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(helloWordRef.current, {
        opacity: 0,
        y: 500,
        duration: 2,
        ease: "bounce.out",
      });
    }, helloWordRef);

    return () => {
      ctx.revert();
    };
  }, [helloWordRef]);

  // Efeito de fade que faz praticamente, o elemento vem do final do width da página é vai até aonde ele tava na posição original mais de forma suave
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(newsPaperRef.current, {
        opacity: 0,
        delay: 1.8,
        x: -200,
        duration: 3,
        ease: "power4",
      });
    });

    return () => {
      ctx.revert();
    };
  }, [newsPaperRef]);

  return (
    <div className="">
      <Navbar />

      <h1
        ref={helloWordRef}
        className="text-4xl text-center mt-40 text-red-500 border-b border-gray-500]"
      >
        Hello Word!
      </h1>
      <h1 ref={newsPaperRef} className="text-4xl text-center text-blue-500">
        NeswPaper!
      </h1>
    </div>
  );
}
