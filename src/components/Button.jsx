import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  size = "medium", // Add size prop for flexibility
  isLoading = false, // Add loading state
  isDisabled = false, // Add disabled state
  className = "",
  ...props
}) {
  // Define size classes for flexibility
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={`rounded-lg ${bgColor} ${textColor} ${sizeClasses[size]} ${className}`}
      disabled={isDisabled || isLoading} // Handle disabled state
      aria-busy={isLoading} // Accessibility attribute
      {...props}
    >
      {isLoading ? "Loading..." : children} {/* Handle loading state */}
    </button>
  );
}
