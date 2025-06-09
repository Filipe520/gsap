"use client";

import "../../globals.css";

import { useState, useEffect } from "react";
import Link from "next/link";

import navLinks from "@/app/constants";

export default function Navbar() {
  // track od true user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      {/* Navbar */}
      <div className="inner">
        <Link href={"#"} className="logo">
          Live Dev
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks().map(
              (link: { name: string; link: string }, index: number) => (
                <li key={index}>
                  <Link href={link.link}>
                    <span className="underline">{link.name}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
