import * as React from "react";
const SvgSmsNotification = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 10.5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m7 9 3.13 2.5c1.03.82 2.72.82 3.75 0l1.18-.94M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSmsNotification;
