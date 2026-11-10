import React from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "deep";
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  id,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDeep = theme === "deep";

  return (
    <div className={`mb-12 max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1 mb-4 ${
            isDeep
              ? "bg-[#84B7CE]/20 text-[#84B7CE] border border-[#84B7CE]/30"
              : "bg-[#84B7CE]/20 text-[#17385B] border border-[#84B7CE]/40"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-tight ${
          isDeep ? "text-[#F5F2EB]" : "text-[#17385B]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDeep ? "text-[#C7D9D2]" : "text-[#415A77]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
