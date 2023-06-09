import * as React from "react";
const SvgBill = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.67 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9c.79-.59 1.25-1.52 1.25-2.5V2.5H3.67Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 2.5h20"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M8 8h8M8 13h8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBill;
