import React, { useEffect, useRef } from "react";
import "./BirthdayBomb.css"; // make sure to create this file or paste CSS into index.css

const COLORS = [
  "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#B388EB", "#FF9F1C",
  "#FF6EC7", "#00C2A8"
];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function BirthdayBomb() {
  const containerRef = useRef(null);

  // create a confetti burst
  function burstConfetti(amount = 60) {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // origin in the center of the cake container
    const originX = rect.width / 2;
    const originY = rect.height / 2;

    for (let i = 0; i < amount; i++) {
      const el = document.createElement("div");
      el.className = "bb-confetti";
      // random color / size
      el.style.background = COLORS[Math.floor(random(0, COLORS.length))];
      const size = Math.floor(random(6, 16));
      el.style.width = `${size}px`;
      el.style.height = `${Math.floor(random(6, 22))}px`;
      el.style.left = `${originX}px`;
      el.style.top = `${originY}px`;

      // random initial rotation
      el.style.transform = `translate(-50%, -50%) rotate(${random(0, 360)}deg)`;

      // set custom CSS properties used by animation
      const angle = random(-Math.PI, Math.PI); // direction
      const speed = random(200, 700); // px per second-ish
      el.style.setProperty("--angle", angle);
      el.style.setProperty("--speed", speed + "px");
      el.style.setProperty("--drift", random(-80, 80) + "px");
      el.style.setProperty("--duration", random(1400, 2600) + "ms");
      el.style.setProperty("--delay", random(0, 200) + "ms");

      container.appendChild(el);

      // cleanup after animation finishes
      const removeAfter = parseInt(el.style.getPropertyValue("--duration")) + 1000;
      setTimeout(() => {
        el.remove();
      }, removeAfter);
    }
  }

  useEffect(() => {
    // auto burst when component mounts
    const t = setTimeout(() => burstConfetti(70), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bb-root">
      <div className="bb-cake-container" ref={containerRef}>
        {/* background cake is applied via CSS to this container */}
        <button
          className="bb-burst-btn"
          onClick={() => burstConfetti(80)}
          aria-label="Burst confetti"
        >
          Burst!
        </button>
      </div>
    </div>
  );
}
