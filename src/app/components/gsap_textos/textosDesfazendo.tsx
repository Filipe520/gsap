"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

export default function App() {
  const tituloRef = useRef<HTMLHeadingElement>(null);

  gsap.registerPlugin(SplitText);

  useEffect(() => {
    const split = SplitText.create(tituloRef.current, {
      type: "chars, words, lines",
      linesClass: "text-blue-500",
    });

    gsap.from(split.chars, {
      yPercent: "random([-100, 100])",
      rotation: "random([-30, 30])",
      autoAlpha: 0,
      yoyo: true,
      repeat: -1,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });

    return () => split.revert();
  }, []);

  return (
    <main className="bg-black-50 h-dvh flex items-center justify-between flex-col w-full">
      <h1 ref={tituloRef} className="text-2xl text-white mx-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, commodi
        quisquam a placeat architecto, perspiciatis dolores magnam blanditiis
        eius fugit aperiam, cum repellendus necessitatibus dolorum odit
        reiciendis! Obcaecati, placeat excepturi! Culpa corporis aliquam esse
        aperiam facilis ipsam itaque ex libero ratione odio, adipisci
        voluptatem! Tempora, minima! Quas blanditiis corrupti, sapiente minus
        explicabo natus optio quos sint facere iste provident asperiores. Et,
        quae magnam quaerat deserunt, facilis ex corrupti recusandae tenetur
        numquam aliquid labore nisi sit laboriosam aut vel repellat rerum
        delectus fugit mollitia vitae, culpa beatae? Alias nemo voluptatem
      </h1>
    </main>
  );
}
