import * as React from "react";
const SvgMask = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.07 4.93 4.93 19.07A9.969 9.969 0 0 1 2 12C2 6.48 6.48 2 12 2c2.76 0 5.26 1.12 7.07 2.93Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 12c0 5.52-4.48 10-10 10-2.76 0-5.26-1.12-7.07-2.93L19.07 4.93A9.969 9.969 0 0 1 22 12ZM7.76 16.24l5.65 5.66M11.29 12.71l6.58 6.57M14.83 9.17l6.29 6.3"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMask;
