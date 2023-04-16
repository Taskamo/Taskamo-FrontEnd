import * as React from "react";
const SvgProgrammingArrows = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8v9.5c0 1.1.9 2 2 2h5.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgProgrammingArrows;
