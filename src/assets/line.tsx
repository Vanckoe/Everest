import React from 'react';

type LineProps = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Line: React.FC<LineProps> = ({
  color = '#22C2A4',
  width = '10',
  height = '32',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 4 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="1"
        y1="0"
        x2="1"
        y2="32"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Line;