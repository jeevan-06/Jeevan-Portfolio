import { ReactNode } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
}

export default function SplitText({ 
  text, 
  className = "", 
  wordClassName = "",
  charClassName = ""
}: SplitTextProps) {
  const words = text.split(" ");
  
  return (
    <span className={className} style={{ display: "inline-block", margin: 0, padding: 0 }}>
      {words.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className={wordClassName} 
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, charIndex) => (
            <span 
              key={charIndex} 
              className={charClassName} 
              style={{ display: "inline-block", willChange: "transform, opacity" }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && <span style={{ display: "inline-block" }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
