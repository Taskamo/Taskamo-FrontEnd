import * as React from "react";
const SvgBezier = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 7h-4M9 7H5M7.5 16.5v2c0 .61-.37 1.14-.89 1.36A1.4 1.4 0 0 1 6 20H4c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5ZM21.5 16.5v2c0 .83-.67 1.5-1.5 1.5h-2a1.4 1.4 0 0 1-.61-.14c-.52-.22-.89-.75-.89-1.36v-2c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5ZM15 5.5v3c0 .82-.68 1.5-1.5 1.5h-3C9.68 10 9 9.32 9 8.5v-3c0-.82.68-1.5 1.5-1.5h3c.82 0 1.5.68 1.5 1.5Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 7.73c2.37 1.2 4 3.78 4 6.77 0 .17-.01.33-.03.5M5.03 15c-.02-.17-.03-.33-.03-.5 0-2.99 1.63-5.57 4-6.77"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgBezier;
