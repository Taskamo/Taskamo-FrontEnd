import * as React from "react";
const SvgCalendarCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM9.89 5.83v2M14.11 5.83v2M7.53 10.14h8.94"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.5 17.67h-3c-2.5 0-4-1.8-4-4v-3c0-2.2 1.5-4 4-4h3c2.5 0 4 1.8 4 4v3c0 2.2-1.5 4-4 4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCalendarCircle;
