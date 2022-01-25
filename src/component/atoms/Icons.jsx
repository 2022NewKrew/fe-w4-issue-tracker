import styled from "styled-components";

export const Icon = ({ name, color }) => icons[name](color);

const icons = {
  search: (color) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14.0001 14L11.1001 11.1" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "alert-circle": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_85_513)">
        <path
          d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
          stroke={color}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 5.33334V8.00001" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10.6667H8.00667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_85_513">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  archive: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_85_559)">
        <path d="M14 5.33334V14H2V5.33334" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3334 2H0.666748V5.33333H15.3334V2Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.66675 8H9.33341" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_85_559">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  "check-on-circle": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.9999 6.33334L7.33325 10.0067L5.33325 8.00668" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "check-off-circle": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99992 1.33334C4.31802 1.33334 1.33325 4.31811 1.33325 8.00001C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "x-square": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2999 4.70023L4.70025 11.2999M4.7002 4.70016L11.2999 11.2998" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  plus: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3.33334V12.6667" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.33325 8H12.6666" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "refresh-ccw": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_85_540)">
        <path d="M0.666748 2.66666V6.66666H4.66675" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3333 13.3333V9.33334H11.3333" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
  ),
  calendar: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6667 1.33334V4.00001" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33325 1.33334V4.00001" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 6.66666H14" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  tag: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.66659 4.66668H4.67325M13.7266 8.94001L8.94659 13.72C8.82275 13.844 8.6757 13.9423 8.51384 14.0094C8.35198 14.0765 8.17847 14.1111 8.00325 14.1111C7.82803 14.1111 7.65453 14.0765 7.49267 14.0094C7.3308 13.9423 7.18375 13.844 7.05992 13.72L1.33325 8.00001V1.33334H7.99992L13.7266 7.06001C13.9749 7.30983 14.1143 7.64776 14.1143 8.00001C14.1143 8.35226 13.9749 8.69019 13.7266 8.94001Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  edit: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.3333 9.77335V13.3334C13.3333 13.687 13.1928 14.0261 12.9427 14.2762C12.6927 14.5262 12.3535 14.6667 11.9999 14.6667H2.66659C2.31296 14.6667 1.97382 14.5262 1.72378 14.2762C1.47373 14.0261 1.33325 13.687 1.33325 13.3334V4.00002C1.33325 3.6464 1.47373 3.30726 1.72378 3.05721C1.97382 2.80716 2.31296 2.66669 2.66659 2.66669H6.22659"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9999 1.33331L14.6666 3.99998L7.99992 10.6666H5.33325V7.99998L11.9999 1.33331Z" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  trash: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4H3.33333H14" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.33325 3.99998V2.66665C5.33325 2.31302 5.47373 1.97389 5.72378 1.72384C5.97383 1.47379 6.31296 1.33331 6.66659 1.33331H9.33325C9.68687 1.33331 10.026 1.47379 10.2761 1.72384C10.5261 1.97389 10.6666 2.31302 10.6666 2.66665V3.99998M12.6666 3.99998V13.3333C12.6666 13.6869 12.5261 14.0261 12.2761 14.2761C12.026 14.5262 11.6869 14.6666 11.3333 14.6666H4.66659C4.31296 14.6666 3.97382 14.5262 3.72378 14.2761C3.47373 14.0261 3.33325 13.6869 3.33325 13.3333V3.99998H12.6666Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66675 7.33331V11.3333" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33325 7.33331V11.3333" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  smile: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.99992 14.6666C11.6818 14.6666 14.6666 11.6819 14.6666 7.99998C14.6666 4.31808 11.6818 1.33331 7.99992 1.33331C4.31802 1.33331 1.33325 4.31808 1.33325 7.99998C1.33325 11.6819 4.31802 14.6666 7.99992 14.6666Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33325 9.33331C5.33325 9.33331 6.33325 10.6666 7.99992 10.6666C9.66659 10.6666 10.6666 9.33331 10.6666 9.33331"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 6H6.00667" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6H10.0067" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  paperclip: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  milestone: (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 0C7.94891 0 8.13968 0.0790176 8.28033 0.21967C8.42098 0.360322 8.5 0.551088 8.5 0.75V3H12.134C12.548 3 12.948 3.147 13.264 3.414L15.334 5.164C15.5282 5.32828 15.6842 5.53291 15.7912 5.76364C15.8982 5.99437 15.9537 6.24566 15.9537 6.5C15.9537 6.75434 15.8982 7.00563 15.7912 7.23636C15.6842 7.46709 15.5282 7.67172 15.334 7.836L13.264 9.586C12.9481 9.85325 12.5478 9.99993 12.134 10H8.5V15.25C8.5 15.4489 8.42098 15.6397 8.28033 15.7803C8.13968 15.921 7.94891 16 7.75 16C7.55109 16 7.36032 15.921 7.21967 15.7803C7.07902 15.6397 7 15.4489 7 15.25V10H2.75C2.28587 10 1.84075 9.81563 1.51256 9.48744C1.18437 9.15925 1 8.71413 1 8.25V4.75C1 3.784 1.784 3 2.75 3H7V0.75C7 0.551088 7.07902 0.360322 7.21967 0.21967C7.36032 0.0790176 7.55109 0 7.75 0ZM7.75 8.5H12.134C12.1931 8.49965 12.2501 8.47839 12.295 8.44L14.365 6.69C14.3924 6.66653 14.4145 6.63739 14.4296 6.60459C14.4447 6.57179 14.4525 6.53611 14.4525 6.5C14.4525 6.46389 14.4447 6.42821 14.4296 6.39541C14.4145 6.36261 14.3924 6.33347 14.365 6.31L12.295 4.56C12.2501 4.52161 12.1931 4.50035 12.134 4.5H2.75C2.6837 4.5 2.62011 4.52634 2.57322 4.57322C2.52634 4.62011 2.5 4.6837 2.5 4.75V8.25C2.5 8.388 2.612 8.5 2.75 8.5H7.75Z"
        fill={color}
      />
    </svg>
  ),
  "check-box-initial": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.8" y="0.8" width="14.4" height="14.4" rx="1.2" fill={color === "#FEFEFE" ? "#14142B" : "#FEFEFE"} stroke={color} strokeWidth="1.6" />
    </svg>
  ),
  "check-box-disable": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill={color} />
      <path d="M6 8H10" stroke={color === "#FEFEFE" ? "#14142B" : "#FEFEFE"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "check-box-active": (color) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="2" fill={color} />
      <path d="M10.6667 6L7 9.67333L5 7.67333" stroke={color === "#FEFEFE" ? "#14142B" : "#FEFEFE"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "arrow-down": (color) => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
