import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  asAnchor = false,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#17385B] text-[#F5F2EB] hover:bg-[#10263f] focus-visible:ring-[#17385B] shadow-sm hover:shadow active:scale-[0.98]",
    secondary:
      "bg-[#84B7CE] text-[#17385B] hover:bg-[#72a6bd] focus-visible:ring-[#84B7CE] shadow-sm active:scale-[0.98]",
    outline:
      "border-2 border-[#17385B] text-[#17385B] hover:bg-[#17385B]/5 focus-visible:ring-[#17385B] active:scale-[0.98]",
    ghost:
      "text-[#17385B] hover:bg-[#17385B]/10 focus-visible:ring-[#17385B]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asAnchor && href) {
    return (
      <a href={href} className={combinedClasses} role="button">
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
