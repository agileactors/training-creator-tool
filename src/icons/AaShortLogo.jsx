/* eslint-disable react/no-unknown-property */
import React from 'react';

export const AaShortLogo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.5 58" className={className}>
    <defs>
      <linearGradient id="a" x1="39.65" x2="2.88" y1="35.4" y2="14.17" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#00d9ef" />
        <stop offset="1" stopColor="#00adc9" />
      </linearGradient>
      <linearGradient id="b" x1="97.74" x2="60.92" y1="35.41" y2="14.15" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#39f" />
        <stop offset="1" stopColor="#005ece" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M26.17 52.17a26.07 26.07 0 1 1 0-52.17 6.53 6.53 0 1 1 0 13.05 13 13 0 1 0 0 26 6.53 6.53 0 1 1 0 13.05z"
    />
    <path
      fill="#00d9ef"
      d="M45.8 51.49A6.54 6.54 0 0 1 39.24 45V26.1a13.06 13.06 0 0 0-13.07-13 6.53 6.53 0 1 1 0-13 26.15 26.15 0 0 1 26.18 26V45a6.54 6.54 0 0 1-6.55 6.49z"
    />
    <ellipse cx="103.9" cy="45.67" fill="#1099ff" rx="6.46" ry="6.43" />
    <path
      fill="url(#b)"
      d="M84.25 52.2a26.1 26.1 0 1 1 0-52.2 6.54 6.54 0 1 1 0 13.07 13 13 0 1 0 0 26.06 6.54 6.54 0 1 1 0 13.07z"
    />
    <path
      fill="#1099ff"
      d="M103.9 32.64a6.55 6.55 0 0 1-6.56-6.54 13.08 13.08 0 0 0-13.09-13 6.54 6.54 0 1 1 0-13.1 26.19 26.19 0 0 1 26.21 26.1 6.55 6.55 0 0 1-6.56 6.54z"
    />
  </svg>
);
