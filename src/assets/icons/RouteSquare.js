import * as React from "react";
const SvgRouteSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m17.35 9.05-2.34 7.54c-.56 1.79-3.07 1.82-3.66.04l-.7-2.07c-.19-.57-.64-1.03-1.21-1.21l-2.08-.7c-1.77-.59-1.74-3.12.05-3.66l7.54-2.35c1.48-.45 2.87.94 2.4 2.41Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgRouteSquare;
