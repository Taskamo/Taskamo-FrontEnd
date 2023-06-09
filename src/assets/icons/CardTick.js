import * as React from "react";
const SvgCardTick = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 10h20"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.548 20.5h-5.11c-3.55 0-4.45-.88-4.45-4.39V7.89c0-3.18.74-4.2 3.53-4.36.28-.01.59-.02.92-.02h11.11c3.55 0 4.45.88 4.45 4.39v4.41"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 16h4M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m16.441 18 .99.99 2.13-1.97"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCardTick;
