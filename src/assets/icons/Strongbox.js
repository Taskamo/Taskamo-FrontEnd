import * as React from "react";
const SvgStrongbox = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.351 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98c-.58-.36-1-.96-1.1-1.67-.02-.11-.03-.23-.03-.35 0-1.52 1.44-2.7 3.02-2.28.8.21 1.45.86 1.66 1.66.09.33.1.66.05.97ZM22.002 10.91h-7.65M9.65 10.91H2"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
);
export default SvgStrongbox;
