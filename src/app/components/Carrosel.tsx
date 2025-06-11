"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const images = [
  "./cabra.jpg",
  "cachorro.jpg",
  "corujas.jpg",
  "flamingo.jpg",
  "girafa.jpg",
  "lemore.jpg",
  "leopardo.jpg",
  "veado.jpg",
];

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const slideWidth = 320; // largura da imagem + espaço entre elas

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    images.forEach((_, i) => {
      tl.to(progressBarRef.current, {
        width: `${((i + 1) / images.length) * 100}%`,
        duration: 3,
        ease: "none",
        onStart: () => {
          gsap.to(carouselRef.current, {
            x: -i * slideWidth,
            duration: 1,
            ease: "power2.inOut",
          });
        },
      });
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-white text-2xl font-semibold mb-6">
        Slider interativo!
      </h1>

      <div className="overflow-hidden w-[320px]">
        <div ref={carouselRef} className="flex gap-5">
          {images.map((src, i) => (
            <div
              key={i}
              className="w-[300px] h-[450px] rounded-xl overflow-hidden shadow-lg flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="w-[320px] h-2 bg-gray-700 mt-4 rounded-full overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-green-400 rounded-full w-0"
        ></div>
      </div>
    </div>
  );
}
