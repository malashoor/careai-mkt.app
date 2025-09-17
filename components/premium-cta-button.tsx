"use client";
import * as React from "react";
import Link from "next/link";

interface PremiumCTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: React.ReactNode;
  href: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function PremiumCTAButton({
  label,
  children,
  href,
  className = "",
  size = "md",
  variant = "primary",
  onClick
}: PremiumCTAButtonProps): JSX.Element {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
  };

  const baseClasses = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2";

  const text = label ?? (typeof children === 'string' ? children : '');
  
  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
}