import type * as THREE_NS from "three";
import { useEffect, useRef } from "react";

/**
 * Animated 3D wireframe terrain (three.js) used as the hero background.
 * Rolling sine-noise hills rendered as a lime wireframe mesh, seen from a low camera.
 */
export function HeroTerrain({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !mount) return;

      const w = mount.clientWidth || window.innerWidth;
      const h = mount.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0a0f1e, 0.016);

      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 200);
      camera.position.set(0, 2.6, 11);
      camera.lookAt(0, 0.6, -10);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      mount.appendChild(renderer.domElement);

      const SIZE = 90;
      const SEG = 110;
      const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
      geometry.rotateX(-Math.PI / 2);

      const material = new THREE.MeshBasicMaterial({
        color: 0x69e300,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
      });

      const terrain = new THREE.Mesh(geometry, material);
      terrain.position.z = -18;
      scene.add(terrain);

      const pos = geometry.attributes["position"] as THREE_NS.BufferAttribute;
      const base = Float32Array.from(pos.array);

      let raf = 0;
      const start = performance.now();

      const render = () => {
        const t = (performance.now() - start) / 1000;
        for (let i = 0; i < pos.count; i++) {
          const x = base[i * 3]!;
          const z = base[i * 3 + 2]!;
          const y =
            Math.sin(x * 0.16 + t * 0.55) * 1.15 +
            Math.cos(z * 0.19 - t * 0.42) * 1.0 +
            Math.sin((x + z) * 0.09 + t * 0.3) * 0.85;
          pos.setY(i, y);
        }
        pos.needsUpdate = true;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(render);
      };
      render();

      const onResize = () => {
        const nw = mount.clientWidth || window.innerWidth;
        const nh = mount.clientHeight || window.innerHeight;
        renderer.setSize(nw, nh, false);
        camera.aspect = nw / nh;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(mount);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
