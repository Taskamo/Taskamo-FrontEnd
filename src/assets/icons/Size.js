import * as React from "react";
const SvgSize = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.97 5.85v3.3c0 2.75-1.1 3.85-3.85 3.85h-1.15v-.75c0-3.75-1.5-5.25-5.25-5.25h-.75V5.85c0-2.75 1.1-3.85 3.85-3.85h3.3c2.75 0 3.85 1.1 3.85 3.85Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSize;