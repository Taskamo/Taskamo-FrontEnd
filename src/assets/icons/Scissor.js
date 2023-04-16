import * as React from "react";
const SvgScissor = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 6 8.65 15.98M22 17.97 8.65 7.98"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgScissor;
