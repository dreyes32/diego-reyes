"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  velocityX: number;
  velocityY: number;
  phase: number;
  driftSpeed: number;
  amplitude: number;
  size: number;
  depth: number;
  alpha: number;
};

function parseRgb(value: string) {
  const hex = value.trim();
  if (hex.startsWith("#") && hex.length === 7) {
    return {
      r: Number.parseInt(hex.slice(1, 3), 16),
      g: Number.parseInt(hex.slice(3, 5), 16),
      b: Number.parseInt(hex.slice(5, 7), 16),
    };
  }
  return { r: 47, g: 92, b: 71 };
}

function isTouchOnly() {
  // Use any-pointer / any-hover so a mouse still counts on Windows
  // laptops whose *primary* pointer is a touchscreen. Chrome reports
  // pointer: coarse there; Cursor's embedded browser often does not.
  const fine = window.matchMedia("(any-pointer: fine)").matches;
  const hover = window.matchMedia("(any-hover: hover)").matches;
  return !fine && !hover;
}

function isLowPower() {
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = "deviceMemory" in navigator ? Number(navigator.deviceMemory) : 8;
  return cores <= 4 || memory <= 4;
}

function createParticles(width: number, height: number, count: number) {
  const particles: Particle[] = [];
  const fieldHeight = height * 1.08;

  for (let i = 0; i < count; i += 1) {
    const cluster = Math.random() < 0.42;
    const x = cluster
      ? width * (0.62 + (Math.random() - 0.5) * 0.5)
      : Math.random() * width;
    const y = cluster
      ? height * (0.42 + (Math.random() - 0.5) * 0.55)
      : Math.random() * fieldHeight;
    const depth = Math.pow(Math.random(), 0.85);

    particles.push({
      x,
      y,
      homeX: x,
      homeY: y,
      velocityX: 0,
      velocityY: 0,
      phase: Math.random() * Math.PI * 2,
      driftSpeed: 0.35 + Math.random() * 0.75,
      amplitude: 2.2 + Math.random() * 3.8,
      size: 0.7 + depth * 1.7 + Math.random() * 0.4,
      depth,
      alpha: 0.085 + depth * 0.11 + Math.random() * 0.04,
    });
  }

  return particles;
}

function particleCount(width: number, height: number, lowPower: boolean, touchOnly: boolean) {
  const area = width * height;
  const density = touchOnly || lowPower ? 0.00009 : 0.00016;
  return Math.round(Math.min(Math.max(area * density, 90), touchOnly ? 140 : 280));
}

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({
    x: -1e4,
    y: -1e4,
    inside: false,
    fine: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchOnly = isTouchOnly();
    const lowPower = isLowPower();
    const cursorEnabled = !reducedMotion;

    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let last = performance.now();
    let elapsed = 0;
    let running = true;

    const colorFromTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      const ink = parseRgb(styles.getPropertyValue("--ink"));
      const accent = parseRgb(styles.getPropertyValue("--accent"));
      return {
        r: Math.round(ink.r * 0.72 + accent.r * 0.28),
        g: Math.round(ink.g * 0.72 + accent.g * 0.28),
        b: Math.round(ink.b * 0.72 + accent.b * 0.28),
      };
    };

    let color = colorFromTheme();
    const themeObserver = new MutationObserver(() => {
      color = colorFromTheme();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const paint = (scrollFade: number, animate: boolean, nowDt: number) => {
      if (animate) elapsed += nowDt;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = `rgb(${color.r} ${color.g} ${color.b})`;

      const pointer = pointerRef.current;
      const radius = 160;
      const step = Math.min(nowDt, 0.033) * 60;
      const returnStrength = 0.038;
      const damping = Math.pow(0.88, step);
      const repulsion = 3.2;

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (animate) {
          const targetX =
            particle.homeX +
            Math.sin(elapsed * particle.driftSpeed + particle.phase) * particle.amplitude;
          const targetY =
            particle.homeY +
            Math.cos(elapsed * particle.driftSpeed * 0.86 + particle.phase) *
              particle.amplitude *
              0.82;

          if (cursorEnabled && pointer.inside && pointer.fine) {
            let dx = particle.x - pointer.x;
            let dy = particle.y - pointer.y;
            let dist = Math.hypot(dx, dy);
            if (dist < 0.5) {
              dx = 1;
              dy = 0;
              dist = 0.5;
            }
            if (dist < radius) {
              const falloff = (1 - dist / radius) ** 2;
              const force = 3.2 * falloff * step;
              particle.velocityX += (dx / dist) * force;
              particle.velocityY += (dy / dist) * force;
            }
          }

          particle.velocityX += (targetX - particle.x) * returnStrength * step;
          particle.velocityY += (targetY - particle.y) * returnStrength * step;
          particle.velocityX *= damping;
          particle.velocityY *= damping;
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;
        }

        ctx.globalAlpha = particle.alpha * scrollFade * (0.7 + particle.depth * 0.75);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, lowPower ? 1.15 : 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = createParticles(
        width,
        height,
        particleCount(width, height, lowPower, touchOnly),
      );
      paint(1, false, 0);
    };

    const loop = (now: number) => {
      if (!running) return;
      frame = window.requestAnimationFrame(loop);
      if (document.hidden) {
        last = now;
        return;
      }

      const dt = Math.min((now - last) / 1000, 0.033);
      last = now;
      const scrollFade = Math.max(0, 1 - window.scrollY / (height * 0.9));
      if (scrollFade < 0.02) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      paint(scrollFade, !reducedMotion, dt);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      pointerRef.current.inside = true;
      pointerRef.current.fine = event.pointerType !== "touch";
    };

    const onMouseMove = (event: MouseEvent) => {
      const fromTouch = Boolean(
        "sourceCapabilities" in event &&
          (event as MouseEvent & { sourceCapabilities?: { firesTouchEvents?: boolean } })
            .sourceCapabilities?.firesTouchEvents,
      );
      if (fromTouch) return;
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      pointerRef.current.inside = true;
      pointerRef.current.fine = true;
    };

    const onPointerLeaveWindow = (event: PointerEvent | MouseEvent) => {
      if (event.relatedTarget) return;
      pointerRef.current.inside = false;
    };

    resize();
    last = performance.now();
    if (!reducedMotion) {
      frame = window.requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseout", onPointerLeaveWindow);
    window.addEventListener("blur", () => {
      pointerRef.current.inside = false;
    });

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseout", onPointerLeaveWindow);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
