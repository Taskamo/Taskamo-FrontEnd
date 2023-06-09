import * as React from "react";
const SvgSun = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 8.5V3M12 21v-5.5M10 3h4M10 21h4M8.97 10.25 4.21 7.5M19.79 16.5l-4.76-2.75M3.21 9.23l2-3.46M18.79 18.23l2-3.46M15.5 12a3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 1 0-7 3.5 3.5 0 0 1 3.5 3.5ZM19.79 7.5l-4.76 2.75M8.97 13.75 4.21 16.5M20.79 9.23l-2-3.46M5.21 18.23l-2-3.46"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSun;
