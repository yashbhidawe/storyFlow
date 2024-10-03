import React from "react";

function Logo({ width = "200px" }) {
  return (
    <svg
      width={width}
      height="40"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#274690", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#576CA8", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        fontSize="40"
        fill="#F5F3F5"
      >
        StoryFlow
      </text>
      <path
        d="M10,60 C50,0 150,0 200,60 S290,0 300,60"
        stroke="#F5F3F5"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Logo;
