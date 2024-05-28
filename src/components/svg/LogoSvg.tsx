import type { ComponentPropsWithoutRef } from "react";

export type LogoSvgProps = ComponentPropsWithoutRef<"svg"> & { size?: number };

export const LogoSvg = ({ size = 32, ...props }: LogoSvgProps) => {
  return (
    <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 81.88 94.05" {...props}>
      <g id="Calque_2-2" data-name="Calque 2">
        <path 
          style={{ fill: 'none', stroke: '#f5f5f5', strokeMiterlimit: 10, strokeWidth: '3px' }} 
          d="M75.38,15.62c0,1.69-.3,3.3-.84,4.8l-.02.06-13.26,31.27-13.14-30.95-.14-.38c-.54-1.5-.84-3.12-.84-4.8,0-7.8,6.32-14.12,14.12-14.12s14.12,6.32,14.12,14.12Z"
        />
        <circle 
          style={{ fill: 'none', stroke: '#f5f5f5', strokeMiterlimit: 10, strokeWidth: '3px' }} 
          cx="61.26" cy="15.62" r="7.75"
        />
        <path 
          style={{ fill: 'none', stroke: '#f5f5f5', strokeMiterlimit: 10, strokeWidth: '3px' }} 
          d="M29.74,53.93c0,1.69-.3,3.3-.84,4.8l-.02.06-13.26,31.27L2.48,59.11l-.14-.38c-.54-1.5-.84-3.12-.84-4.8,0-7.8,6.32-14.12,14.12-14.12s14.12,6.32,14.12,14.12Z"
        />
        <circle 
          style={{ fill: 'none', stroke: '#f5f5f5', strokeMiterlimit: 10, strokeWidth: '3px' }} 
          cx="15.62" cy="53.93" r="7.75"
        />
        <path 
          style={{ fill: 'none', stroke: '#f5f5f5', strokeMiterlimit: 10, strokeWidth: '3px' }} 
          d="M29.74,92.55h36.27c14.73,0,14.37-9.26,14.37-9.26,0-11.64-13.78-12.35-13.78-12.35h-14.46c-7.1,0-7.89-7.39-7.89-7.39,0-9.99,7.89-8.36,7.89-8.36"
        />
      </g>
    </svg>
  );
};
