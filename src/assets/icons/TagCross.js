import * as React from "react";
const SvgTagCross = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.28 20.25H17c2.76 0 5-2.24 5-5v-6.5c0-2.76-2.24-5-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.053 4.053 0 0 0 0 5.46l3.53 3.88a4.978 4.978 0 0 0 3.7 1.64Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m16 14.47-4.94-4.94M11.06 14.47 16 9.53"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgTagCross;
