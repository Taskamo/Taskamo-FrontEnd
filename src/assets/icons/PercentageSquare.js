import * as React from "react";
const SvgPercentageSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7H9c-5 0-7-2-7-7V9c0-5 2-7 7-7ZM8.57 15.27l6.54-6.54"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.98 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46ZM15.52 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgPercentageSquare;
