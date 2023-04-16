import * as React from "react";
const SvgToggleOnCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgToggleOnCircle;
