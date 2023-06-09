import * as React from "react";
const SvgLockCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 11v-1c0-1.66.5-3 3-3s3 1.34 3 3v1M12 14.6a.6.6 0 1 0 0-1.2.6.6 0 0 0 0 1.2Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 17h-5c-2 0-2.5-.5-2.5-2.5v-1c0-2 .5-2.5 2.5-2.5h5c2 0 2.5.5 2.5 2.5v1c0 2-.5 2.5-2.5 2.5Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLockCircle;
