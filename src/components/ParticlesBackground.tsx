"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "repulse"],
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: { opacity: 0.25 }, // mas subtle lines kapag hover
            },
            repulse: {
              distance: 120,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: { value: 55 }, // konti lang para hindi crowded
          color: {
            value: ["#ff6600", "#00ccff", "#ffff00", "#ff00ff", "#00ffcc"],
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 160,
            opacity: 0.18, // ✅ super subtle lines
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.2, // ✅ mabagal para chill
            outModes: { default: "out" },
          },
          size: { value: { min: 1, max: 2.5 } },
          opacity: { value: 0.5 },
        },
        detectRetina: true,
      }}
    />
  );
}
