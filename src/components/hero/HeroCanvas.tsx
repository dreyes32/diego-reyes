"use client";

import { HeroModel } from "@/components/three/HeroModel";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Group } from "three";

function PointerRig({
  children,
  reducedMotion,
}: {
  children: React.ReactNode;
  reducedMotion: boolean;
}) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current || reducedMotion) return;
    const x = state.pointer.y * 0.12;
    const y = state.pointer.x * 0.16;
    ref.current.rotation.x += (x - ref.current.rotation.x) * 0.04;
    ref.current.rotation.y += (y - ref.current.rotation.y) * 0.04;
  });

  return <group ref={ref}>{children}</group>;
}

type HeroCanvasProps = {
  reducedMotion: boolean;
};

export function HeroCanvas({ reducedMotion }: HeroCanvasProps) {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    setDpr(isMobile ? [1, 1.25] : [1, 1.75]);
  }, []);

  return (
    <Canvas
      camera={{ position: [2.2, 0.22, 2.9], fov: 38 }}
      dpr={dpr}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      frameloop={reducedMotion ? "demand" : "always"}
      style={{ background: "transparent", touchAction: "none" }}
      aria-hidden
    >
      <ambientLight intensity={0.78} />
      <directionalLight position={[2.2, 2.4, 3]} intensity={1.05} />
      <directionalLight position={[-2.4, -0.8, -1.4]} intensity={0.24} />
      <Suspense fallback={null}>
        <PointerRig reducedMotion={reducedMotion}>
          <HeroModel reducedMotion={reducedMotion} />
        </PointerRig>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom
        zoomSpeed={0.65}
        minDistance={1.7}
        maxDistance={6.5}
        enableDamping={!reducedMotion}
        dampingFactor={0.08}
        autoRotate={false}
        rotateSpeed={0.65}
        minPolarAngle={0.75}
        maxPolarAngle={2.35}
      />
    </Canvas>
  );
}

export default HeroCanvas;
