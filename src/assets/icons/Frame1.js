import * as React from "react";
const SvgFrame1 = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.01 20.5-5.02-5.01M9.01 3.5v17M14.99 3.5l5.02 5.01M14.99 20.5v-17"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgFrame1;
