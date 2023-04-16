import * as React from "react";
const SvgSunFog = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.5 12a6.5 6.5 0 1 0-13 0"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m4.99 4.99-.13-.13m14.15.13.13-.13-.13.13ZM12 2.08V2v.08ZM2.08 12H2h.08ZM22 12h-.08.08Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 15h16M6 18h12M9 21h6"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgSunFog;
