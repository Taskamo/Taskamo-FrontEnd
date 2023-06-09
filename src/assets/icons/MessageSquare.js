import * as React from "react";
const SvgMessageSquare = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.28 9.76v3.14c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.31c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.733.733 0 0 0-.5-.25h-.31c-2.51 0-3.76-.62-3.76-3.76V9.77c0-2.3 1.06-3.55 3.18-3.73.19-.02.39-.03.59-.03h5.03c2.47-.01 3.73 1.25 3.73 3.75Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMessageSquare;
