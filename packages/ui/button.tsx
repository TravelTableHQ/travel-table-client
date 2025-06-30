import React from "react";
import { cn } from "./utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  className,
}) => {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2";
  const variantClasses =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500";

  return (
    <button
      className={cn(baseClasses, variantClasses, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
