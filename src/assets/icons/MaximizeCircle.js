import * as React from "react";
const SvgMaximizeCircle = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17 3h4v4M15 9l6-6M7 21H3v-4M9 15l-6 6M14.02 2.2C13.37 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12c0 .69.07 1.36.2 2M9.98 21.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMaximizeCircle;
