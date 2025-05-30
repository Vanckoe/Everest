import React from 'react';

interface StarIconProps {
  color?: string;
  width?: string;
  height?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ color = '#484848', width = '24', height = '24' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 
               8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

export default StarIcon;
