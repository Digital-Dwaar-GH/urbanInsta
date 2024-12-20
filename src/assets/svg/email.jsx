import React from 'react';

const Mail = ({ fill = "black", ...props }) => (
  <svg
    id="Layer_1"
    enableBackground="new 0 0 512 512"
    height="512"
    viewBox="0 0 512 512"
    width="512"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // This will pass any other props like className or style
  >
    <path
      clipRule="evenodd"
      d="m256 512c-141.159 0-256-114.841-256-256s114.841-256 256-256 256 114.841 256 256-114.841 256-256 256zm132.758-166.069c3.156 0 5.725-2.568 5.725-5.725v-160.717l-130.25 103.432c-2.41 1.915-5.323 2.872-8.234 2.872s-5.823-.958-8.234-2.872l-130.249-103.432v160.717c0 3.157 2.569 5.725 5.725 5.725zm-19.96-179.862-112.798 89.575-112.799-89.575zm52.168 5.725v168.414c0 17.759-14.449 32.208-32.208 32.208h-265.517c-17.76 0-32.207-14.449-32.207-32.208v-168.414c0-17.759 14.448-32.207 32.207-32.207h265.517c17.759-.001 32.208 14.448 32.208 32.207z"
      fill={fill} // Use fill prop to change color
      fillRule="evenodd"
    />
  </svg>
);

export default Mail;
