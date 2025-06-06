import React from "react";

type LogoProps = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Logo3: React.FC<LogoProps> = ({
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
        d="M36.6877 3.66983C38.1329 5.21564 39.2583 7.03022 40 9.0098L24.8804 14.6407L31.578 0C33.5065 0.876784 35.2428 2.12379 36.6877 3.66983ZM34.7762 31.5862C36.8625 28.4731 37.9763 24.8127 37.9763 21.0685H18.9882V2.13696C15.2327 2.13696 11.5614 3.24738 8.439 5.32749C5.31635 7.4076 2.88257 10.3645 1.44548 13.8238C0.00816488 17.2829 -0.367796 21.0895 0.364887 24.7619C1.09757 28.4343 2.90598 31.8074 5.56158 34.455C8.21718 37.1027 11.6004 38.9058 15.2837 39.6362C18.9671 40.3667 22.7851 39.9917 26.2545 38.5589C29.7241 37.1261 32.6899 34.6995 34.7762 31.5862Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo3;