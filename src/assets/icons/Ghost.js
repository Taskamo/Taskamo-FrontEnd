import * as React from "react";
const SvgGhost = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l2 1.83c.37.34.97.34 1.34 0l2-1.83c.37-.34.97-.34 1.34 0l1 .91c.88.84 1.63.5 1.63-.76Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 14a6.66 6.66 0 0 0 8 0M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGhost;
