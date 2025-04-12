// src/BackgroundParticles.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  // cette fonction permet de charger tous les presets
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // callback pour l'update en live
  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      // style absolu pour occuper tout l'écran derrière le terminal
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.5 }}
      options={{
        background: {
          color: "transparent", // pas de fond, on laisse le backgroundColor de TerminalIntro
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // ou 'grab', 'bubble' etc.
            },
            onClick: {
              enable: true,
              mode: "push", // ou 'remove' etc.
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#ff0000" },
          links: {
            color: "#ff0000",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: false,
            straight: false,
            outModes: "out",
          },
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
