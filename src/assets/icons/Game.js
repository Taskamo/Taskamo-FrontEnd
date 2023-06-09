import * as React from "react";
const SvgGame = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.57 12.46-3.05 3.05M6.55 12.49l3.05 3.05"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.53 14h.01M17.47 14h.01M15.5 15.98v-.02M15.5 12.04v-.02"
      stroke="#fff"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22h6c5 0 7-2 7-7v-2c0-5-2-7-7-7H9c-5 0-7 2-7 7v2c0 5 2 7 7 7ZM13.01 2 13 3.01A1 1 0 0 1 12 4h-.03c-.55 0-.99.45-.99 1s.45 1 1 1h1"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgGame;
