import * as React from "react";
const SvgRefreshCircle = (props) => (
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
      d="M8.01 14.51c.18.3.4.58.65.83a4.732 4.732 0 0 0 6.68 0 4.71 4.71 0 0 0 1.32-2.67M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 0 1 6.68 0c.26.26.47.54.65.83"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.82 17.18v-2.67h2.67M16.18 6.82v2.67h-2.67"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRefreshCircle;
