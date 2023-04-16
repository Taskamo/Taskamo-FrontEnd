import * as React from "react";
const SvgTextUnderline = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 21h14M5 3v7c0 3.87 3.13 7 7 7s7-3.13 7-7V3"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgTextUnderline;
