import React from "react";
import { theme } from "@/styles/theme";

const Plus: React.FC<{ color?: string }> = ({ color = theme.color.offWhite, ...props }) => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 3.33334V12.6667"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.3335 8H12.6668"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaperClip: React.FC<{ color?: string }> = ({ color = theme.color.offWhite, ...props }) => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconRefresh: React.FC<{ color?: string }> = ({ color = theme.color.label, ...props }) => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_85_540)">
      <path
        d="M0.666748 2.66666V6.66666H4.66675"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3333 13.3333V9.33334H11.3333"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6601 6.00001C13.322 5.04453 12.7473 4.19028 11.9898 3.51696C11.2322 2.84363 10.3164 2.37319 9.32789 2.14952C8.33934 1.92584 7.31024 1.95624 6.33662 2.23786C5.363 2.51948 4.47658 3.04315 3.76008 3.76001L0.666748 6.66668M15.3334 9.33334L12.2401 12.24C11.5236 12.9569 10.6372 13.4805 9.66354 13.7622C8.68992 14.0438 7.66082 14.0742 6.67227 13.8505C5.68372 13.6268 4.76795 13.1564 4.01039 12.4831C3.25284 11.8097 2.67819 10.9555 2.34008 10"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_85_540">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export { Plus, PaperClip, IconRefresh };
