import * as React from "react";
const SvgArrow = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 2 2 4l2 2M20 2l2 2-2 2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgArrow;
