"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

export default function GsapProvider({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

    gsap.defaults({
      ease: "power3.out",
      duration: 0.7,
    });

    ScrollTrigger.defaults({
      start: "top 85%",
      toggleActions: "play none none none",
    });
  }, []);

  return <>{children}</>;
}