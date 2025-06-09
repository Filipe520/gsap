"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MenuLateralAnimado() {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    const items = itemsRef.current;

    if (!menu) return;

    if (isOpen) {
      menu.style.display = "block";

      // Anima o container (menu)
      gsap.to(menu, {
        opacity: 1,
        width: "300px",
        duration: 0.4,
        ease: "power2.out",
      });

      // Anima os itens do menu (com stagger)
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    } else {
      // Fecha os itens primeiro
      gsap.to(items, {
        opacity: 0,
        x: -20,
        duration: 0.2,
        stagger: 0.05,
        ease: "power1.in",
      });

      // Depois fecha o menu
      gsap.to(menu, {
        opacity: 0,
        width: "0px",
        duration: 0.3,
        delay: 0.2,
        ease: "power1.in",
        onComplete: () => {
          menu.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  // Resetando a lista de refs toda vez que renderizar os itens
  itemsRef.current = [];

  return (
    <main className="flex min-h-screen bg-zinc-900 text-white">
      {/* Menu lateral */}
      <div
        ref={menuRef}
        className="bg-zinc-800 h-screen overflow-hidden opacity-0"
        style={{ width: 0, display: "none" }}
      >
        <nav className="flex flex-col p-6 gap-4">
          {["Início", "Sobre", "Projetos", "Contato"].map((label, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="text-lg font-medium opacity-0 translate-x-[-20px]"
            >
              {label}
            </div>
          ))}
        </nav>
      </div>

      {/* Botão hamburguer */}
      <button className="ml-4 mt-6 flex">
        <RxHamburgerMenu
          size={30}
          className="text-cyan-400 cursor-pointer hover:opacity-70"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </button>
    </main>
  );
}
