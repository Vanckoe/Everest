import React from "react";

type LogoProps = {
  color?: string;
  width?: string;
  height?: string;
  className?: string;
};

const Logo2: React.FC<LogoProps> = ({
  width = "2.5rem", // можно подкорректировать по желанию
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
        d="M26.7436 4.08196C27.2797 2.78782 27.5556 1.40077 27.5556 0H16.8889V10.6667C18.2897 10.6667 19.6767 10.3908 20.9709 9.85472C22.265 9.31867 23.4409 8.53297 24.4314 7.54248C25.4219 6.55198 26.2076 5.3761 26.7436 4.08196ZM40 20.0798C40 25.3629 37.8929 30.4297 34.1422 34.1655C30.3914 37.9013 25.3043 40 20 40C14.6957 40 9.60862 37.9013 5.85785 34.1655C2.10709 30.4297 0 25.3629 0 20.0798H11.7372C11.7372 22.2625 12.6079 24.3557 14.1574 25.8991C15.7069 27.4424 17.8085 28.3096 20 28.3096C22.1915 28.3096 24.2931 27.4424 25.8426 25.8991C27.3921 24.3557 28.2628 22.2625 28.2628 20.0798H40Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo2;
