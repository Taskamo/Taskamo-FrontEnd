import * as React from "react";
const SvgCommandSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.4 9.6H9.6v4.8h4.8V9.6ZM7.8 18c.99 0 1.8-.81 1.8-1.8v-1.8H7.8c-.99 0-1.8.81-1.8 1.8S6.81 18 7.8 18ZM7.8 9.6h1.8V7.8c0-.99-.81-1.8-1.8-1.8S6 6.81 6 7.8s.81 1.8 1.8 1.8ZM14.4 9.6h1.8c.99 0 1.8-.81 1.8-1.8S17.19 6 16.2 6s-1.8.81-1.8 1.8v1.8ZM16.2 18c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8h-1.8v1.8c0 .99.81 1.8 1.8 1.8Z"
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
export default SvgCommandSquare;
