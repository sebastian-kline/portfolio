"use client";

import { useEffect, useRef } from "react";

export default function ConstellationBackground() {

  // Reference to the canvas element
  const canvasRef = useRef(null);

  // Stores current mouse position
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationFrameId;

    // Makes canvas always fill the screen
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Creates all the floating particles
    function createParticles() {

      // Use less particles on mobile so performance stays smooth
      const particleCount = window.innerWidth < 768 ? 45 : 90;

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        // Small random movement speed
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,

        // Random particle size
        size: Math.random() * 1.8 + 0.8,
      }));
    }

    // Main animation loop
    function draw() {

      // Clears previous frame before redrawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {

        const mouse = mouseRef.current;

        // Makes nearby particles react to mouse movement
        if (mouse.x !== null && mouse.y !== null) {

          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only affect particles near the mouse
          if (distance < 180) {

            // Push particles slightly away from mouse
            particle.x -= dx * 0.003;
            particle.y -= dy * 0.003;
          }
        }

        // Moves particles every frame
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce particles off screen edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        // Draws particle circle
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        ctx.fill();
      });

      // Draw connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {

        for (let j = i + 1; j < particles.length; j++) {

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect particles that are close enough
          if (distance < 130) {

            ctx.beginPath();

            ctx.moveTo(particles[i].x, particles[i].y);

            ctx.lineTo(particles[j].x, particles[j].y);

            // Makes farther lines more transparent
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 130})`;

            ctx.lineWidth = 0.25;

            ctx.stroke();
          }
        }
      }

      // Runs animation again on next frame
      animationFrameId = requestAnimationFrame(draw);
    }

    // Tracks mouse movement
    function handleMouseMove(e) {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    }

    // Resets mouse position when cursor leaves screen
    function handleMouseLeave() {
      mouseRef.current = {
        x: null,
        y: null,
      };
    }

    // Initial setup
    resizeCanvas();
    createParticles();
    draw();

    // Rebuild canvas and particles when screen size changes
    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup when component unmounts
    return () => {

      cancelAnimationFrame(animationFrameId);

      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("mouseleave", handleMouseLeave);
    };

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-40"
    />
  );
}