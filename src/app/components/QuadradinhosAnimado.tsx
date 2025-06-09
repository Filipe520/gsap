"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import Navbar from "../components/models/Navbar";

export default function QuadradinhosAnimado() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxes = containerRef.current
      ? containerRef.current.querySelectorAll(".box")
      : [];

    const ctx = gsap.context(() => {
      gsap.to(boxes, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 gap-8">
      <Navbar />
      <div ref={containerRef} className="grid grid-cols-4 gap-4">
        {Array(16)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="box w-16 h-16 bg-cyan-400 opacity-0 scale-50 rounded"
            ></div>
          ))}
      </div>
    </main>
  );
}
