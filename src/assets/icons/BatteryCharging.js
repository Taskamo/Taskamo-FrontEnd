import * as React from "react";
const SvgBatteryCharging = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBatteryCharging;
