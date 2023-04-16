import * as React from "react";
const SvgLikeDislike = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.92 20.28 1.77 1.37c.23.23.74.34 1.09.34h2.17c.69 0 1.43-.51 1.6-1.2l1.37-4.17c.29-.8-.23-1.49-1.09-1.49H9.54a.58.58 0 0 1-.57-.69l.29-1.83c.11-.51-.23-1.09-.74-1.26-.46-.17-1.03.06-1.26.4l-2.34 3.49"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2 20.28v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.29 1.14 1.09v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.28-1.14-1.09Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m19.08 3.72-1.77-1.37c-.23-.23-.74-.34-1.09-.34h-2.17c-.69 0-1.43.51-1.6 1.2l-1.37 4.17c-.29.8.23 1.49 1.09 1.49h2.29c.34 0 .63.29.57.69l-.29 1.83c-.11.51.23 1.09.74 1.26.46.17 1.03-.06 1.26-.4l2.34-3.49"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M22 3.72v5.6c0 .8-.34 1.09-1.14 1.09h-.57c-.8 0-1.14-.29-1.14-1.09v-5.6c0-.8.34-1.09 1.14-1.09h.57c.8 0 1.14.28 1.14 1.09Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgLikeDislike;