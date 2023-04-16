import * as React from "react";
const SvgBlur1 = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.61 2.21a.991.991 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M12 2v20M12 18.96l7.7-3.74M12 13.96l7.37-3.58M12 8.96l5.03-2.45"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBlur1;
