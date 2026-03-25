import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  IcosahedronGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
} from "three";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const PARTICLE_COUNT = 420;

export function AboutThreeBackgroundAlt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) return;

    const section = canvas.closest("section");
    if (!(section instanceof HTMLElement)) return;

    const scene = new Scene();
    const camera = new PerspectiveCamera(50, 1, 0.1, 120);
    camera.position.set(0, 0, 14);

    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const coreGeometry = new IcosahedronGeometry(3.6, 2);
    const coreMaterial = new MeshBasicMaterial({
      color: new Color("#22c55e"),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const core = new Mesh(coreGeometry, coreMaterial);
    scene.add(core);

    const particlesGeometry = new BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
      const idx = i * 3;
      // Spread more horizontally than vertically for a “nebula band” look.
      positions[idx] = (Math.random() - 0.5) * 28;
      positions[idx + 1] = (Math.random() - 0.5) * 14;
      positions[idx + 2] = (Math.random() - 0.5) * 14;
      sizes[i] = 0.032 + Math.random() * 0.04;
    }

    particlesGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(positions, 3),
    );

    const particlesMaterial = new PointsMaterial({
      color: new Color("#34d399"),
      size: 0.05,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: AdditiveBlending,
    });

    const particles = new Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let pulse = 0;

    const setSize = () => {
      const width = section.clientWidth;
      const height = section.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const toLocalPointer = (clientX: number, clientY: number) => {
      const rect = section.getBoundingClientRect();
      const nx = ((clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      const ny = ((clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1;
      targetX = Math.max(-1, Math.min(1, nx));
      targetY = Math.max(-1, Math.min(1, ny));
    };

    const onPointerMove = (event: PointerEvent) => {
      toLocalPointer(event.clientX, event.clientY);
    };
    const onPointerDown = (event: PointerEvent) => {
      toLocalPointer(event.clientX, event.clientY);
      pulse = 1;
    };
    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    setSize();
    window.addEventListener("resize", setSize);
    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerdown", onPointerDown);
    section.addEventListener("pointerleave", onPointerLeave);

    const ro = new ResizeObserver(() => setSize());
    ro.observe(section);

    let rafId = 0;
    const animate = () => {
      smoothX += (targetX - smoothX) * 0.06;
      smoothY += (targetY - smoothY) * 0.06;
      pulse *= 0.92;

      core.rotation.y += 0.0032 + smoothX * 0.01;
      core.rotation.x += 0.0015 + -smoothY * 0.008;
      core.position.x = smoothX * 0.75;
      core.position.y = -smoothY * 0.45;

      particles.rotation.y += 0.0016 + smoothX * 0.006;
      particles.rotation.x += 0.0007 + -smoothY * 0.004;
      particles.position.x = smoothX * 0.5;
      particles.position.y = -smoothY * 0.28;

      particlesMaterial.opacity = 0.55 + pulse * 0.18;
      particlesMaterial.size = 0.05 + pulse * 0.05;
      coreMaterial.opacity = 0.18 + pulse * 0.12;

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
      ro.disconnect();
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerdown", onPointerDown);
      section.removeEventListener("pointerleave", onPointerLeave);
      coreGeometry.dispose();
      coreMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="about-three-bg" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

