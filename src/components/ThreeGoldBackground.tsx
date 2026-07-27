import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeGoldBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Emerald Green Ambient & Point Lights (#5ed29c)
    const ambientLight = new THREE.AmbientLight(0x5ed29c, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x5ed29c, 2.5, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const secondaryLight = new THREE.PointLight(0x5ed29c, 1.8, 50);
    secondaryLight.position.set(-5, -5, 3);
    scene.add(secondaryLight);

    // Floating Emerald Particles System (#5ed29c)
    const particleCount = 380;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 24;
      positions[i + 1] = (Math.random() - 0.5) * 24;
      positions[i + 2] = (Math.random() - 0.5) * 16;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    // Emerald Green Radial Canvas Texture (#5ed29c)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(94, 210, 156, 1)');      // #5ed29c
      grad.addColorStop(0.4, 'rgba(94, 210, 156, 0.6)');  // #5ed29c mid
      grad.addColorStop(0.8, 'rgba(94, 210, 156, 0.2)');  // #5ed29c outer
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: createParticleTexture(),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particleMaterial);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Particle floating upward movement
      const posArray = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 1; i < particleCount * 3; i += 3) {
        posArray[i] += 0.01;
        if (posArray[i] > 12) posArray[i] = -12;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Camera sway reacting to mouse
      camera.position.x = targetX * 0.6;
      camera.position.y = targetY * 0.6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
    />
  );
};
