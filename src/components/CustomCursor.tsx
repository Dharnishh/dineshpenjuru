// dharnishh/dineshpenjuru/dineshpenjuru-61f31d163d67f0757ff94b209afed6c793e4caa3/src/components/CustomCursor.tsx
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      // Update state directly on mousemove for immediate reaction.
      // requestAnimationFrame will ensure the *rendering* is smooth.
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsInteracting(true);
    const handleMouseLeave = () => setIsInteracting(false);

    // Track mouse movement
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseenter", () => setIsVisible(true));
    document.addEventListener("mouseleave", () => setIsVisible(false));

    // Track interactive elements
    // Dynamically find interactive elements rather than hardcoding.
    // This includes elements with specific cursor styles or interactive roles.
    const interactiveElements = document.querySelectorAll(
      'button, a, input, textarea, select, [role="button"], .flip-card, [onclick], [onmouseover], [data-sidebar="trigger"], [data-sidebar="rail"], [data-sidebar="menu-button"], [data-sidebar="group-action"], [data-sidebar="menu-action"], [data-sidebar="menu-sub-button"]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseenter", () => setIsVisible(true));
      document.removeEventListener("mouseleave", () => setIsVisible(false));

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${
        isInteracting ? "scale-150 bg-primary/50" : "scale-100 bg-primary/30"
      }`}
      style={{
        left: position.x - 12, // Adjust by half the cursor size (24px/2 = 12) to center it
        top: position.y - 12,  // Adjust by half the cursor size
      }}
    />
  );
};
