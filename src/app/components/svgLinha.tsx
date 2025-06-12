"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  // Elementos referênciados do meu dom
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const areaBtnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const title = titleRef.current;
    const description = descriptionRef.current;
    const areaBtn = areaBtnRef.current;

    tl.fromTo(title, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(
        description,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "-=0.75"
      )
      .fromTo(areaBtn, { opacity: 0, x: -100 }, { opacity: 1, x: 0 }, "-=0.75");
  }, []);

  return (
    <div className="h-dvh w-full flex justify-center">
      <div className="mx-5 h-full w-full max-w-[700px] flex justify-center flex-col">
        <h1 className="text-gray-900 text-5xl font-bold my-10" ref={titleRef}>
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p ref={descriptionRef}>
          A utility-first CSS framework packed with classes like{" "}
          <code className="text-blue-800">flex, pt-4, text-center</code> and{" "}
          <code className="text-blue-800">rotate-90</code> that can be composed
          to build any design, directly in your markup.
        </p>
        <div ref={areaBtnRef}>
          <button className="px-10 py-5 bg-sky-600 text-white rounded-2xl mt-5 active:opacity-50">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
