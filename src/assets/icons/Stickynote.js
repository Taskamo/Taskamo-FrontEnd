import * as React from "react";
const SvgStickynote = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 2v3M16 2v3M7 11h8M7 15h5M15 22H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h8c3.33.18 5 1.45 5 6.15V16"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgStickynote;
