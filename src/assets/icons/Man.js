import * as React from "react";
const SvgMan = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.25 21.5a7.75 7.75 0 1 0 0-15.5 7.75 7.75 0 0 0 0 15.5ZM21.5 2.5 16 8M15 2.5h6.5V9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMan;
