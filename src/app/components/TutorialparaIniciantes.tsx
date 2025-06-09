"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function TutorialparaIniciantes() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // to vai começar da posição original é vai
    // gsap.to(divRef.current, {
    //   x: 200,
    //   duration: 1,
    //   backgroundColor: "#AA3939",
    //   border: "red",
    // });

    // from vai começar do valor que foi colocado aqui dentro é voltar para posição original
    // gsap.from(divRef.current, {
    //   x: 200,
    //   duration: 1,
    //   backgroundColor: "#AA3939",
    //   border: "red",
    // });

    // o fromTo vai precisar de 3 parâmetro.
    // o primeiro o elemento referenciado
    // Segundo o efeito, Terceiro efeito também
    const boxes = divRef.current ? divRef.current.querySelectorAll(".box") : [];

    gsap.fromTo(
      boxes,
      {
        x: -200,
        y: 100,
      },
      {
        y: -200,
        x: 100,
        duration: 2,
        stagger: 2,
        ease: "bounce.in",
      }
    );
  }, []);

  return (
    <main className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div ref={divRef} className="flex gap-5">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="box h-50 w-50 rounded-full bg-blue-500 flex items-center justify-center font-medium text-xl p-5 border border-sky-500 shadow"
            >
              Teste com GSAP
            </div>
          ))}
      </div>
    </main>
  );
}
