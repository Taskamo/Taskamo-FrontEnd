import * as React from "react";
const SvgText = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.67 7.17V5.35c0-1.15.93-2.07 2.07-2.07h14.52c1.15 0 2.07.93 2.07 2.07v1.82M12 20.72V4.11M8.06 20.72h7.88"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgText;
