import * as React from "react";
const SvgEraser = (props) => (
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
      d="m6.99 15.08 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34ZM9.31 10.42l4.27 4.27"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgEraser;
