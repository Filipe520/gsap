"use client";

import { useRef } from "react";
import gsap from "gsap";

import Navbar from "../components/models/Navbar";
export default function AnimacaoNivelBasic_01() {
  const boxRef = useRef<HTMLDivElement>(null); // Vai começar fazio sem nada

  // Função que roda quando o mouse entra
  const handleEnter = () => {
    gsap.to(boxRef.current, {
      scale: 1.1, // cresce 10%
      backgroundColor: "#38bdf8", // azul-claro (Tailwind sky-500)
      duration: 0.3,
      ease: "power1.out",
    });
  };

  // Função que roda quando o mouse sai
  const handleLeave = () => {
    gsap.to(boxRef.current, {
      scale: 1, // volta ao tamanho original
      backgroundColor: "#f87171", // vermelho-claro (Tailwind red-400)
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <Navbar />
      <div
        ref={boxRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="w-32 h-32 bg-red-400 rounded shadow-lg cursor-pointer"
      ></div>
    </div>
  );
}
