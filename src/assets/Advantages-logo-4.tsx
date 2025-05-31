import React from "react";

type LogoProps = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Logo4: React.FC<LogoProps> = ({
  width = "2.5rem",
  height = "2.5rem",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.8 16.8L33.6 0H0V33.6L16.8 16.8ZM40 6.4L23.2 24L40 40V6.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo4;