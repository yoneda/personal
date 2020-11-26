import React from "react";
import Svg from "./Svg";

function Instagram() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-brand-instagram"
      width="34"
      height="34"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="#2c3e50"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
    </Svg>
  );
}

export default React.memo(Instagram);