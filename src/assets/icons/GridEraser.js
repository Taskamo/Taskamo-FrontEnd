import * as React from "react";
const SvgGridEraser = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M2.03 8.5H22M2.03 15.5H12M8.51 21.99V2.01M15.51 11.99V2.01"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m18.8 19.7-1.9 1.9c-.52.52-1.38.52-1.91 0l-1.58-1.59c-.52-.52-.52-1.38 0-1.91l1.9-1.89 3.49 3.49Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m21.61 16.9-2.81 2.81-3.5-3.5 2.81-2.82c.52-.52 1.39-.52 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGridEraser;
