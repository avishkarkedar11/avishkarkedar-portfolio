import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring & ambient glow spotlight
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer");

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* 1. Large Ambient Background Mouse Spotlight Glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`absolute h-[450px] w-[450px] rounded-full transition-opacity duration-500 ${
          isHovered
            ? "bg-gradient-to-r from-blue-500/20 via-indigo-500/15 to-purple-500/20 blur-3xl opacity-90"
            : "bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl opacity-60"
        }`}
      />

      {/* 2. Outer Smooth Following Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? "rgba(59, 130, 246, 0.8)" : "rgba(148, 163, 184, 0.4)",
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.08)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute h-9 w-9 rounded-full border-2 border-blue-500/60 backdrop-blur-[1px]"
      />

      {/* 3. Sharp Inner Pointer Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#3b82f6" : "#60a5fa",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="absolute h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"
      />
    </div>
  );
}
