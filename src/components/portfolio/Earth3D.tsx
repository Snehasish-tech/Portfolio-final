import type * as THREE_NS from "three";
import { useEffect, useRef } from "react";
import earthTexture from "@/assets/earth-texture.jpg";

export function Earth3D({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !mount) return;

      const size = Math.min(mount.clientWidth, mount.clientHeight) || 280;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
      camera.position.z = 3.1;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(size, size, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      mount.appendChild(renderer.domElement);

      const loader = new THREE.TextureLoader();
      const map = loader.load(earthTexture);
      map.colorSpace = THREE.SRGBColorSpace;
      map.anisotropy = 8;

      const globe = new THREE.Mesh(
        new THREE.SphereGeometry(1, 64, 64),
        new THREE.MeshStandardMaterial({ map, roughness: 0.85, metalness: 0.05 }),
      );
      globe.rotation.z = 0.35;
      scene.add(globe);

      // Wireframe latitude/longitude cage
      const cage = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.SphereGeometry(1.015, 24, 16)),
        new THREE.LineBasicMaterial({ color: 0xa3e635, transparent: true, opacity: 0.14 }),
      );
      globe.add(cage);

      // Atmospheric glow shell
      const atmosphere = new THREE.Mesh(
        new THREE.SphereGeometry(1.16, 48, 48),
        new THREE.ShaderMaterial({
          transparent: true,
          side: THREE.BackSide,
          blending: THREE.AdditiveBlending,
          uniforms: { uColor: { value: new THREE.Color(0xa3e635) } },
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            varying vec3 vNormal;
            uniform vec3 uColor;
            void main() {
              float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
              gl_FragColor = vec4(uColor, 1.0) * intensity;
            }
          `,
        }),
      );
      scene.add(atmosphere);

      scene.add(new THREE.AmbientLight(0xffffff, 0.75));
      const key = new THREE.DirectionalLight(0xd9f99d, 2.1);
      key.position.set(3, 2, 3);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0x84cc16, 1.2);
      rim.position.set(-3, -1, -2);
      scene.add(rim);

      let raf = 0;
      const render = () => {
        globe.rotation.y += 0.0022;
        renderer.render(scene, camera);
        raf = requestAnimationFrame(render);
      };
      render();

      const onResize = () => {
        const s = Math.min(mount.clientWidth, mount.clientHeight) || size;
        renderer.setSize(s, s, false);
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(onResize);
      ro.observe(mount);

      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        renderer.dispose();
        map.dispose();
        globe.geometry.dispose();
        (globe.material as THREE_NS.Material).dispose();
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
