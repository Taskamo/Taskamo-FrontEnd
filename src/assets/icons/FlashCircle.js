import * as React from "react";
const SvgFlashCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m8.68 11.91 1.65.41-.95 3.84c-.22.9.22 1.2.98.67l5.18-3.59c.63-.44.54-.95-.21-1.14l-1.65-.41.95-3.84c.22-.9-.22-1.2-.98-.67l-5.18 3.59c-.63.44-.54.95.21 1.14Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFlashCircle;
