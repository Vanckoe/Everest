import React from 'react';

interface PlusIconProps {
  color?: string;
  className?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  color = '#484848',
  className,
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M16 6V26M6 16H26"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;