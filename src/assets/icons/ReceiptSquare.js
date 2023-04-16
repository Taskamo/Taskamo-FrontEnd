import * as React from "react";
const SvgReceiptSquare = (props) => (
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
      d="M8.9 16.53c.48-.52 1.22-.48 1.64.09l.6.8c.47.63 1.25.63 1.72 0l.59-.79c.42-.56 1.16-.6 1.64-.09 1.05 1.12 1.9.75 1.9-.82V9.09c0-2.37-.56-2.96-2.78-2.96H9.77c-2.22 0-2.78.59-2.78 2.96v6.63c.01 1.55.87 1.92 1.91.81Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgReceiptSquare;
