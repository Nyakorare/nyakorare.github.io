import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const STAR_COUNT = 260;
const BASE_ROTATION_Y = 0.0007;
const BASE_ROTATION_X = 0.00025;

export function HeroThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(58, 1, 0.1, 100);
    camera.position.z = 9;

    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const geometry = new BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i += 1) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 18;
      positions[idx + 1] = (Math.random() - 0.5) * 9;
      positions[idx + 2] = (Math.random() - 0.5) * 8;
    }

    geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));

    const material = new PointsMaterial({
      color: new Color("#7c8cff"),
      size: 0.055,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      blending: AdditiveBlending,
    });

    const stars = new Points(geometry, material);
    scene.add(stars);

    let targetPointerX = 0;
    let targetPointerY = 0;
    let smoothPointerX = 0;
    let smoothPointerY = 0;
    let burstStrength = 0;

    const toNormalizedPointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const nx = ((clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      const ny = ((clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1;

      targetPointerX = Math.max(-1, Math.min(1, nx));
      targetPointerY = Math.max(-1, Math.min(1, ny));
    };

    const onPointerMove = (event: PointerEvent) => {
      toNormalizedPointer(event.clientX, event.clientY);
    };

    const onPointerDown = (event: PointerEvent) => {
      toNormalizedPointer(event.clientX, event.clientY);
      burstStrength = 1;
    };

    const onPointerLeave = () => {
      targetPointerX = 0;
      targetPointerY = 0;
    };

    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointerleave", onPointerLeave);

    const setSize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? 420;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    setSize();
    window.addEventListener("resize", setSize);

    let rafId = 0;
    const animate = () => {
      smoothPointerX += (targetPointerX - smoothPointerX) * 0.06;
      smoothPointerY += (targetPointerY - smoothPointerY) * 0.06;
      burstStrength *= 0.93;

      stars.rotation.y += BASE_ROTATION_Y + smoothPointerX * 0.0005;
      stars.rotation.x += BASE_ROTATION_X - smoothPointerY * 0.00035;

      stars.position.x = smoothPointerX * 0.32;
      stars.position.y = -smoothPointerY * 0.22;

      material.size = 0.055 + burstStrength * 0.065;
      material.opacity = 0.65 + burstStrength * 0.2;

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="hero-three-bg" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
