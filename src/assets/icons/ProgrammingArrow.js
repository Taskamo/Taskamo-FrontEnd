import * as React from "react";
const SvgProgrammingArrow = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m15 2-3 2.5L15 7M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgProgrammingArrow;
