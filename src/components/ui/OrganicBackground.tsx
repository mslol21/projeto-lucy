import React from "react";

export function OrganicShape({
  className = "",
  variant = "fascia-wave",
}: {
  className?: string;
  variant?: "fascia-wave" | "gentle-cell" | "fluid-mesh";
}) {
  if (variant === "gentle-cell") {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M320 200C320 280 260 340 180 330C100 320 60 250 70 170C80 90 140 60 220 70C300 80 320 120 320 200Z"
          fill="currentColor"
          fillOpacity="0.08"
        />
        <path
          d="M290 210C290 270 240 310 180 300C120 290 90 240 100 180C110 120 150 90 210 100C270 110 290 150 290 210Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeOpacity="0.15"
        />
      </svg>
    );
  }

  if (variant === "fluid-mesh") {
    return (
      <svg
        className={`pointer-events-none select-none ${className}`}
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M50 150 Q 200 50, 350 180 T 550 220"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.2"
          fill="none"
        />
        <path
          d="M40 200 Q 180 120, 340 240 T 560 170"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.15"
          fill="none"
        />
        <path
          d="M60 250 Q 220 180, 360 300 T 540 260"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.12"
          fill="none"
        />
      </svg>
    );
  }

  // fascia-wave default
  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0,200 C250,120 450,280 800,160 L800,600 L0,600 Z"
        fill="currentColor"
        fillOpacity="0.05"
      />
      <path
        d="M0,250 C300,180 500,320 800,220"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.15"
      />
    </svg>
  );
}
