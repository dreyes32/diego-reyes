"use client";

import { HeroFallback } from "@/components/hero/HeroFallback";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("@/components/hero/HeroCanvas"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

function canUseWebGL() {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroVisual() {
  const [ready, setReady] = useState(false);
  const [webgl, setWebgl] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setWebgl(canUseWebGL());
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setReady(true);
  }, []);

  return (
    <div className="relative">
      <div
        className="aspect-square w-full max-w-[460px] sm:max-w-none"
        role="img"
        aria-label="Interactive 3D Snoopy model with a walking animation. Drag to rotate, scroll to zoom."
      >
        {ready && webgl ? (
          <HeroCanvas reducedMotion={reducedMotion} />
        ) : (
          <HeroFallback />
        )}
      </div>
      <p className="mt-3 text-center text-xs text-faint sm:text-right">
        Drag to rotate · Scroll to zoom
      </p>
    </div>
  );
}
