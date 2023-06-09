import * as React from "react";
const SvgGridLock = (props) => (
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
      d="M15.6 17.2v-.8c0-1.33.4-2.4 2.4-2.4s2.4 1.07 2.4 2.4v.8M20 22h-4c-1.6 0-2-.4-2-2v-.8c0-1.6.4-2 2-2h4c1.6 0 2 .4 2 2v.8c0 1.6-.4 2-2 2Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGridLock;
