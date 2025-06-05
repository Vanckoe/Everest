import React from "react";

type RightProps = {
  color?: string;
  width?: string;
  height?: string;
};

const Right: React.FC<RightProps> = ({
  color = "#31A301",
  width = "13",
  height = "15",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4561 8.0414L0.883657 14.4233V12.5702L10.3761 7.44576L10.291 7.61595V7.25667L10.3761 7.42686L0.883657 2.30245V0.449351L12.4561 6.83121V8.0414Z"
        fill={color}
      />
    </svg>
  );
};

export default Right;
