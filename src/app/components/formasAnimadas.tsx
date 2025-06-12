"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/all";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools);

export default function MeuSVG() {
  const circulo = useRef<SVGCircleElement>(null);
  const eclipse = useRef<SVGEllipseElement>(null);
  const quadrado = useRef<SVGRectElement>(null);
  const casa = useRef<SVGPolygonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(circulo.current, 2, {
      duration: 2,
      drawSVG: 0,
      stroke: "rose",
      strokeWidth: 2,
      fill: "gray",
    })
      .from(eclipse.current, { duration: 1, drawSVG: 0 })
      .from(quadrado.current, { duration: 1, drawSVG: 0 })
      .from(casa.current, { duration: 1, drawSVG: 0 });

    tl.timeScale(2);
    GSDevTools.create({ animation: tl });
  }, []);

  return (
    <svg width="300" height="200" viewBox="0 0 300 200">
      <circle
        ref={circulo}
        cx="50"
        cy="50"
        r="30"
        stroke="blue"
        fill="none"
        strokeWidth="5"
      />
      <ellipse
        ref={eclipse}
        cx="150"
        cy="50"
        rx="30"
        ry="15"
        stroke="red"
        fill="none"
        strokeWidth="5"
      />
      <rect
        ref={quadrado}
        x="100"
        y="100"
        width="50"
        height="50"
        stroke="#0ae448"
        fill="none"
        strokeWidth="5"
      />
      <polygon
        ref={casa}
        points="200,100 225,75 250,100 250,150 200,150"
        stroke="#0ae448"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
}
