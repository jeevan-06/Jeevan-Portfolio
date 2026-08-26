import React from 'react';

export type TechIconName = 
  | 'react' | 'typescript' | 'nextjs' | 'tailwind' | 'html5' | 'css3'
  | 'nodejs' | 'python' | 'fastapi' | 'springboot'
  | 'postgresql' | 'mongodb' | 'aws' | 'docker'
  | 'pytorch' | 'tensorflow' | 'yolo' | 'opencv'
  | 'kali' | 'wireshark' | 'metasploit' | 'nmap'
  | 'git' | 'github' | 'vscode' | 'linux';

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: TechIconName;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, ...props }) => {
  // A mapping of tech icon names to minimal SVGs
  const iconPaths = {
    react: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor" {...props}>
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
        <path d="M1.5,63.91v62.5h125v-125H1.5V63.91z M69.73,95.12c-0.08,5.13-1.63,9.06-4.63,11.83c-2.98,2.77-7.25,4.16-12.8,4.16 c-4.52,0-8.24-1-11.13-3.03c-2.92-2.01-4.73-4.52-5.46-7.5l11.45-6.73c0.75,2.05,1.86,3.62,3.31,4.72 c1.45,1.1,3.46,1.66,6.01,1.66c2.51,0,4.4-0.41,5.7-1.25c1.29-0.83,1.93-2.02,1.93-3.56c0-1.42-0.62-2.6-1.84-3.55 c-1.23-0.95-3.8-2.03-7.74-3.23c-4.9-1.5-8.49-3.27-10.74-5.32c-2.26-2.05-3.8-4.44-4.63-7.14c-0.84-2.71-1.25-5.91-1.25-9.61 c0-4.65,1.48-8.54,4.45-11.66c2.97-3.11,7.21-4.68,12.75-4.68c4.32,0,7.91,1.04,10.74,3.1c2.83,2.08,4.64,4.78,5.43,8.12 l-11.48,6.23c-0.66-2-1.74-3.55-3.25-4.64c-1.52-1.1-3.47-1.64-5.86-1.64c-2.04,0-3.66,0.39-4.88,1.18 c-1.23,0.78-1.84,1.84-1.84,3.17c0,1.25,0.61,2.34,1.82,3.27c1.2,0.92,3.77,2.01,7.69,3.26c4.95,1.52,8.65,3.32,11.08,5.41 c2.43,2.09,4.09,4.55,4.98,7.39C69.45,87.72,69.83,91.07,69.73,95.12z M125.75,41.97v13.6h-21.75v54.83H89.4V55.57H67.65v-13.6 H125.75z"/>
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
        <path d="M64,0C28.65,0,0,28.65,0,64s28.65,64,64,64s64-28.65,64-64S99.35,0,64,0z M84.58,95.7L46.43,44.75V86h-8.7V39h9l38.86,52.06 L84.58,95.7z M90.27,86l-7.79-10.45l0.05-36.55h8.7V86H90.27z"/>
      </svg>
    ),
    python: (
      <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
        <path d="M63.78,1.88C31.55,1.88,27,16.51,27,16.51l0.08,15.19h37.38v5.33H22.7c0,0-19.34-2.28-19.34,26.97 c0,29.25,16.92,27.87,16.92,27.87h8.48v-13.1c0,0-0.34-15.65,15.65-15.65h32.55c0,0,14.61-0.27,14.61-14.61V22.25 C91.56,22.25,92.51,1.88,63.78,1.88z M48.74,12.82c3.08,0,5.59,2.51,5.59,5.59c0,3.08-2.51,5.59-5.59,5.59 c-3.08,0-5.59-2.51-5.59-5.59C43.15,15.34,45.66,12.82,48.74,12.82z M64.63,126.31c32.22,0,36.78-14.63,36.78-14.63l-0.08-15.19 H63.95v-5.33h41.76c0,0,19.34,2.28,19.34-26.97c0-29.25-16.92-27.87-16.92-27.87h-8.48v13.1c0,0,0.34,15.65-15.65,15.65H32.45 c0,0-14.61,0.27-14.61,14.61v26.24C17.84,105.95,16.89,126.31,64.63,126.31z M79.67,115.37c-3.08,0-5.59-2.51-5.59-5.59 c0-3.08,2.51-5.59,5.59-5.59c3.08,0,5.59,2.51,5.59,5.59C85.26,112.86,82.75,115.37,79.67,115.37z"/>
      </svg>
    ),
    // Fallback for others - a generic shape with text or just a sleek dot
    default: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  };

  const IconComponent = iconPaths[name as keyof typeof iconPaths] || iconPaths.default;
  
  return IconComponent;
};

export default TechIcon;
