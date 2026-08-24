import { ReactNode } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
}

export default function BlurText({ text, className = "" }: BlurTextProps) {
  return (
    <span 
      className={className} 
      style={{ 
        display: "inline-block", 
        willChange: "filter, opacity" 
      }}
    >
      {text}
    </span>
  );
}
