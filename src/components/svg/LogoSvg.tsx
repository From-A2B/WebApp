import type { ComponentPropsWithoutRef } from 'react';

export type LogoSvgProps = ComponentPropsWithoutRef<'svg'> & { size?: number };

export const LogoSvg = ({ size = 32, ...props }: LogoSvgProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 104 104"
    >
      <path
        d="M95.6604 17.508C95.6604 19.3641 95.28 21.1323 94.5955 22.7798L94.5701 22.8457L77.7599 57.1895L61.1019 23.1971L60.9244 22.7798C60.2398 21.1323 59.8595 19.3531 59.8595 17.508C59.8595 8.94124 67.8716 2 77.7599 2C87.6483 2 95.6604 8.94124 95.6604 17.508Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M77.7599 26.0198C83.1861 26.0198 87.5849 22.2089 87.5849 17.508C87.5849 12.807 83.1861 8.99615 77.7599 8.99615C72.3337 8.99615 67.9349 12.807 67.9349 17.508C67.9349 22.2089 72.3337 26.0198 77.7599 26.0198Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M37.8009 59.5838C37.8009 61.4399 37.4205 63.2081 36.736 64.8556L36.7106 64.9215L19.9004 99.2653L3.24238 65.2729L3.0649 64.8556C2.38032 63.2081 2 61.4289 2 59.5838C2 51.017 10.0121 44.0758 19.9004 44.0758C29.7888 44.0758 37.8009 51.017 37.8009 59.5838Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M19.9005 68.0955C25.3266 68.0955 29.7254 64.2846 29.7254 59.5837C29.7254 54.8828 25.3266 51.0719 19.9005 51.0719C14.4743 51.0719 10.0755 54.8828 10.0755 59.5837C10.0755 64.2846 14.4743 68.0955 19.9005 68.0955Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
      <path
        d="M37.8008 102H83.7816C102.455 102 101.999 91.8297 101.999 91.8297C101.999 79.0455 84.5296 78.2658 84.5296 78.2658H66.1981C57.1972 78.2658 56.1957 70.1493 56.1957 70.1493C56.1957 59.1773 66.1981 60.9676 66.1981 60.9676"
        stroke="currentColor"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
