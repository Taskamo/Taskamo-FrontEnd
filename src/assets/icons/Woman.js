import * as React from "react";
const SvgWoman = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM12 16v6M15 19H9"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgWoman;
