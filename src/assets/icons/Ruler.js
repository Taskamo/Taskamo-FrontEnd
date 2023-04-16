import * as React from "react";
const SvgRuler = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#ruler_svg__a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
    >
      <path d="M5 17h14c2 0 3-1 3-3v-4c0-2-1-3-3-3H5c-2 0-3 1-3 3v4c0 2 1 3 3 3ZM18 7v5M6 7v4M10.05 7 10 12M14 7v3" />
    </g>
    <defs>
      <clipPath id="ruler_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRuler;
