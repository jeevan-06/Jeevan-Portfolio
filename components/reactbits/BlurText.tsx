"use client";

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'word' | 'character';
  direction?: 'top' | 'bottom';
  inView?: boolean;
}

export default function BlurText({
  text,
  delay = 50,
  className = '',
  animateBy = 'word',
  direction = 'top',
  inView = false,
}: BlurTextProps) {
  const elements = animateBy === 'word' ? text.split(' ') : text.split('');
  
  const defaultVariants = {
    hidden: { 
      filter: 'blur(10px)', 
      opacity: 0, 
      y: direction === 'top' ? -20 : 20 
    },
    visible: { 
      filter: 'blur(0px)', 
      opacity: 1, 
      y: 0 
    },
  };

  return (
    <p className={className}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={defaultVariants}
          transition={{
            delay: index * (delay / 1000),
            duration: 0.8,
            ease: "easeOut"
          }}
          style={{ display: 'inline-block', whiteSpace: animateBy === 'word' ? 'pre' : 'normal' }}
        >
          {element}{animateBy === 'word' && index < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </p>
  );
}
