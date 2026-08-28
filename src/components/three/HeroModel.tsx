"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Box3, Group, Vector3 } from "three";

const MODEL_PATH = "/snoopy.glb";
const TARGET_SIZE = 1.85;

const bounds = new Box3();
const size = new Vector3();
const center = new Vector3();

export function HeroModel({ reducedMotion }: { reducedMotion: boolean }) {
  const { scene, animations } = useGLTF(MODEL_PATH);
  const group = useRef<Group>(null);
  const model = useRef<Group>(null);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const walk = actions.Walk;
    if (!walk) return;

    if (reducedMotion) {
      walk.stop();
      return;
    }

    walk.reset().fadeIn(0.25).play();
    return () => {
      walk.fadeOut(0.15);
    };
  }, [actions, reducedMotion]);

  useFrame(() => {
    if (!group.current || !model.current) return;

    model.current.position.set(0, 0, 0);
    group.current.scale.setScalar(1);
    model.current.updateWorldMatrix(true, true);

    bounds.setFromObject(model.current);
    if (bounds.isEmpty()) return;

    bounds.getCenter(center);
    bounds.getSize(size);
    const longest = Math.max(size.x, size.y, size.z) || 1;

    model.current.position.set(-center.x, -center.y, -center.z);
    group.current.scale.setScalar(TARGET_SIZE / longest);
  });

  return (
    <group ref={group}>
      <group ref={model}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);
