import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  {
    label,
    type = "text",
    error,
    required = false,
    disabled = false,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          className={`inline-block mb-1 pl-1 ${
            required ? "after:content-['*'] after:ml-1 after:text-red-500" : ""
          }`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        required={required}
        disabled={disabled}
        aria-invalid={!!error} // Accessibility attribute for error
        aria-describedby={error ? `${id}-error` : undefined}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-400 duration-200 border ${
          error ? "border-red-500" : "border-gray-200"
        } w-full ${className}`}
        {...props}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
});

export default Input;
