import * as React from "react";
const SvgMicroscope = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m15.03 10.77 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34L11.83 6l3.2 4.77Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m12.173 6.48-4.777 3.2 2.56 3.821 4.777-3.2-2.56-3.822ZM5.83 15.9l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27ZM12.05 12.2 7.56 22M12 12.2l4.44 9.8"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgMicroscope;
