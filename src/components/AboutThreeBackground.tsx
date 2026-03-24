import { useEffect, useRef } from "react";
import {
  AdditiveBlending,
  BufferGeometry,
  Color,
  Float32BufferAttribute,
  Group,
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

const SPARK_COUNT = 190;

export function AboutThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || prefersReducedMotion) {
      return;
    }

    const section = canvas.closest("#about");
    if (!(section instanceof HTMLElement)) {
      return;
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(52, 1, 0.1, 120);
    camera.position.set(0, 0, 16);

    const renderer = new WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const orbGroup = new Group();
    scene.add(orbGroup);

    const orbGeometry = new IcosahedronGeometry(4, 1);
    const orbMaterial = new MeshBasicMaterial({
      color: new Color("#7f79ff"),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const orb = new Mesh(orbGeometry, orbMaterial);
    orb.position.set(0, 0.1, 0);
    orbGroup.add(orb);

    const sparkGeometry = new BufferGeometry();
    const sparkPositions = new Float32Array(SPARK_COUNT * 3);
    for (let i = 0; i < SPARK_COUNT; i += 1) {
      const idx = i * 3;
      sparkPositions[idx] = (Math.random() - 0.5) * 24;
      sparkPositions[idx + 1] = (Math.random() - 0.5) * 12;
      sparkPositions[idx + 2] = (Math.random() - 0.5) * 10;
    }
    sparkGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(sparkPositions, 3),
    );

    const sparkMaterial = new PointsMaterial({
      color: new Color("#8dd8ff"),
      size: 0.048,
      transparent: true,
      opacity: 0.52,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    const sparks = new Points(sparkGeometry, sparkMaterial);
    orbGroup.add(sparks);

    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let burst = 0;

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
      burst = 1;
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

    let rafId = 0;
    const animate = () => {
      smoothX += (targetX - smoothX) * 0.055;
      smoothY += (targetY - smoothY) * 0.055;
      burst *= 0.92;

      orbGroup.rotation.y += 0.0022 + smoothX * 0.008;
      orbGroup.rotation.x += 0.001 + -smoothY * 0.005;
      orbGroup.position.x = smoothX * 1.1;
      orbGroup.position.y = -smoothY * 0.75;

      sparkMaterial.opacity = 0.52 + burst * 0.22;
      sparkMaterial.size = 0.048 + burst * 0.03;
      orbMaterial.opacity = 0.22 + burst * 0.15;

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", setSize);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerdown", onPointerDown);
      section.removeEventListener("pointerleave", onPointerLeave);
      orbGeometry.dispose();
      orbMaterial.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="about-three-bg" aria-hidden>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
