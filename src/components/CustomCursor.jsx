import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [snappedEl, setSnappedEl] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Trailing coordinates
  const springConfig = { damping: 24, stiffness: 260, mass: 0.4 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  const [snapBounds, setSnapBounds] = useState({ width: 30, height: 30 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsMobile(!mediaQuery.matches);
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      if (hidden) setHidden(false);

      // 1. Magnetic snapping check
      const clickables = document.querySelectorAll(
        "a, button, [role='button'], .magnetic-snap"
      );
      
      let closestEl = null;
      let minDistance = 55; // Snapping radius (pixels)

      clickables.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const dx = x - centerX;
        const dy = y - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < minDistance) {
          minDistance = dist;
          closestEl = el;
        }
      });

      if (closestEl) {
        setSnappedEl(closestEl);
        setHovered(true);
        
        // Grab dimensions to shape the snapped cursor
        const rect = closestEl.getBoundingClientRect();
        setSnapBounds({
          width: rect.width + 12,
          height: rect.height + 12,
        });

        // Snap outer ring coordinates to center of element
        mouseX.set(rect.left + rect.width / 2);
        mouseY.set(rect.top + rect.height / 2);
      } else {
        setSnappedEl(null);
        setHovered(false);
        // Track raw coordinates
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Add styling hook to html to hide default cursor
    document.documentElement.classList.add("custom-cursor-enabled");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, [mouseX, mouseY, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Inner Dot - moves instantly with raw mouse */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Outer Spring Snap frame */}
      <motion.div
        className="fixed top-0 left-0 border pointer-events-none z-50 transition-colors duration-300"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: hovered ? snapBounds.width : 28,
          height: hovered ? snapBounds.height : 28,
          borderRadius: hovered ? 12 : 9999, // Becomes a rounded box when snapped to buttons
          borderColor: hovered 
            ? "rgba(0, 255, 135, 0.7)" // Neon Emerald snap
            : "rgba(0, 240, 255, 0.7)", // Cyber Cyan trailing
          backgroundColor: hovered 
            ? "rgba(0, 255, 135, 0.05)" 
            : "rgba(0, 240, 255, 0.01)",
          boxShadow: hovered 
            ? "0 0 20px rgba(0, 255, 135, 0.3)" 
            : "0 0 8px rgba(0, 240, 255, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25 }}
      />
    </>
  );
}
