import * as React from "react";
const SvgPersonalcard = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5ZM14 8h5M15 12h4M17 16h2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62ZM12 16.33a3.02 3.02 0 0 0-2.74-2.72 7.72 7.72 0 0 0-1.52 0A3.03 3.03 0 0 0 5 16.33"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPersonalcard;
