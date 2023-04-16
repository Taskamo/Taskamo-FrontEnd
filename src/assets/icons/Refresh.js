import * as React from "react";
const SvgRefresh = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.55 21.67C18.84 20.54 22 16.64 22 12c0-5.52-4.44-10-10-10C5.33 2 2 7.56 2 7.56m0 0V3m0 4.56H6.44"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12c0 5.52 4.48 10 10 10"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="3 3"
    />
  </svg>
);
export default SvgRefresh;
