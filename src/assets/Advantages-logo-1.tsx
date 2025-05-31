import React from "react";

type LogoProps = {
  width?: string;
  height?: string;
  className?: string;
};

const Logo1: React.FC<LogoProps> = ({
  width = "2.5rem",
  height = "2.5rem",
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 17.6019L23.2428 35.2035V0L0 17.6019ZM26.7758 40L40 29.9853L26.7758 19.9706V40Z" />
    </svg>
  );
};

export default Logo1;
