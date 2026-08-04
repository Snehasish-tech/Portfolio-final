import { useEffect, useRef } from "react";

/**
 * Premium Animated 3D Wireframe Terrain for Portfolio Hero Section.
 * Features rolling, ocean-like aesthetic waves flowing top-to-bottom.
 * Custom color palette matched exactly to the Neon Green dark theme.
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

      // ---- Perfectly Matched Neon Green Palette ---------------------------
      const BG_COLOR = 0x050705; // Very deep dark background (almost black with a hint of green)
      const BASE_COLOR = new THREE.Color(0x0d2b0d); // Dark muted green for the deep parts of the wave
      const PEAK_COLOR = new THREE.Color(0x6eff00); // Bright Neon/Lime Green matching your text/buttons
      const FOG_DENSITY = 0.015;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(BG_COLOR, FOG_DENSITY);

      // Camera positioned for a cinematic view over the rolling waves
      const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 200);
      camera.position.set(0, 5.5, 14); 
      camera.lookAt(0, -1.5, -10);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h, false);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      mount.appendChild(renderer.domElement);

      const SIZE = 110;
      const SEG = 130; 
      const geometry = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
      geometry.rotateX(-Math.PI / 2);

      // ---- GPU-animated wireframe shader ---------------------------------
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uOpacity: { value: 0 }, 
          uBaseColor: { value: BASE_COLOR },
          uPeakColor: { value: PEAK_COLOR },
          uFogColor: { value: new THREE.Color(BG_COLOR) },
          uFogDensity: { value: FOG_DENSITY },
        },
        vertexShader: /* glsl */ `
          uniform float uTime;
          varying float vElevation;
          varying float vFogDepth;
          varying vec2 vPosXZ;

          void main() {
            vec3 pos = position;
            float time = uTime * 0.45;

            // Organic, rolling ocean wave math
            float wave1 = sin(pos.z * 0.12 - time * 1.8) * 1.6;
            float wave2 = sin(pos.x * 0.15 + pos.z * 0.05 + time * 1.2) * 0.9;
            float wave3 = sin(pos.x * 0.25 - pos.z * 0.1 - time * 0.8) * 0.4;
            
            float elevation = wave1 + wave2 + wave3;

            pos.y = elevation;
            vElevation = elevation;
            vPosXZ = pos.xz; 

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            vFogDepth = -mvPosition.z;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: /* glsl */ `
          uniform float uOpacity;
          uniform vec3 uBaseColor;
          uniform vec3 uPeakColor;
          uniform vec3 uFogColor;
          uniform float uFogDensity;
          
          varying float vElevation;
          varying float vFogDepth;
          varying vec2 vPosXZ;

          void main() {
            // High contrast smoothstep for glowing green peaks
            float highlight = smoothstep(-0.5, 2.5, vElevation);
            vec3 color = mix(uBaseColor, uPeakColor, highlight);

            // Fog falloff
            float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vFogDepth * vFogDepth);
            color = mix(color, uFogColor, fogFactor);

            // Premium Vignette/Edge Fade
            float distFromCenter = length(vPosXZ);
            float edgeFade = smoothstep(55.0, 15.0, distFromCenter);

            float finalOpacity = uOpacity * (1.0 - fogFactor * 0.4) * edgeFade;

            gl_FragColor = vec4(color, finalOpacity);
          }
        `,
        wireframe: true,
        transparent: true,
      });

      const terrain = new THREE.Mesh(geometry, material);
      terrain.position.z = -12; 
      scene.add(terrain);

      // ---- Intersection Observer for Performance ---------
      let visible = true;
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      }, { threshold: 0 });
      io.observe(mount);

      let raf = 0;
      const start = performance.now();
      const FADE_IN_MS = 2000; 

      const render = () => {
        raf = requestAnimationFrame(render);
        if (!visible) return;

        const elapsed = performance.now() - start;
        material.uniforms.uTime.value = elapsed / 1000;

        const fadeT = Math.min(elapsed / FADE_IN_MS, 1);
        material.uniforms.uOpacity.value = 0.9 * (1 - Math.pow(1 - fadeT, 3));

        renderer.render(scene, camera);
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
        io.disconnect();
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

  return (
    <div
      ref={mountRef}
      className={className ?? "absolute inset-0 -z-10 pointer-events-none"}
      style={{ background: "#050705" }} // Deep dark background to match your site
      aria-hidden="true"
    />
  );
}