"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const divARef = useRef<HTMLDivElement>(null);
  const divBRef = useRef<HTMLDivElement>(null);
  const divCRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação Div A
    gsap.fromTo(
      divARef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: divARef.current,
          // top center bottom
          // 20% 80%
          start: "top center",
          // end: "bottom 100px",
          end: "top center",
          scrub: 3,
          // markers: true,
          // as palavras chaves do toggleActions:
          //  play, pause, resume, reverse, restart, reset, complete, none
          toggleActions: "restart pause reverse pause",
        },
        duration: 10,
        rotate: 360,
        x: 400,
        scale: 1.5,
        ease: "bounce",
        borderRadius: 20,
      }
    );
    // Animação Div B
    gsap.fromTo(
      divBRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: divBRef.current,
          // top center bottom
          // 20% 80%
          start: "top center",
          // end: "bottom 100px",
          end: "top center",
          scrub: 4,
          // markers: true,
          // as palavras chaves do toggleActions:
          //  play, pause, resume, reverse, restart, reset, complete, none
          toggleActions: "restart pause reverse pause",
        },
        duration: 10,
        rotate: 360,
        x: -400,
        scale: 1.5,
        ease: "bounce",
        borderRadius: 20,
      }
    );
    // Animação Div C
    gsap.fromTo(
      divCRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: divCRef.current,
          // top center bottom
          // 20% 80%
          start: "top center",
          // end: "bottom 100px",
          end: "top center",
          scrub: 5,
          // markers: true,
          // as palavras chaves do toggleActions:
          //  play, pause, resume, reverse, restart, reset, complete, none
          toggleActions: "restart pause reverse pause",
        },
        duration: 10,
        rotate: 360,
        x: 400,
        scale: 1.5,
        ease: "elastic",
        borderRadius: 20,
      }
    );
  }, []);

  return (
    <main className="h-dvh text-white flex items-center justify-between flex-col my-300">
      <div
        className=" m-2 rounded-2xl flex items-center justify-center  border border-sky-500 bg-gray-900 gap-2 w-50 h-50"
        ref={divARef}
      >
        <h3>Div - A</h3>
      </div>
      <div
        className=" m-2 rounded-2xl flex items-center justify-center  border border-red-500 bg-gray-900 gap-2 w-50 h-50"
        ref={divBRef}
      >
        <h3>Div - B</h3>
      </div>
      <div
        className=" m-2 rounded-2xl flex items-center justify-center  border border-green-500 bg-gray-900 gap-2 w-50 h-50"
        ref={divCRef}
      >
        <h3>Div - C</h3>
      </div>
    </main>
  );
}
