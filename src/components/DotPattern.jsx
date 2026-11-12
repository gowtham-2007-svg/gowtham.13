import React from 'react';
import { motion } from 'framer-motion';

const DotPattern = ({ 
  className = "", 
  rows = 6, 
  cols = 8, 
  gap = 18, 
  radius = 2, 
  color = "#94a3b8",
  animated = true
}) => {
  const width = (cols - 1) * gap + radius * 2 + 8;
  const height = (rows - 1) * gap + radius * 2 + 8;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => {
          const delay = (r * 0.14 + c * 0.1) % 2.5;
          
          return (
            <motion.circle 
              key={`${r}-${c}`} 
              cx={c * gap + radius + 4} 
              cy={r * gap + radius + 4} 
              r={radius} 
              fill={color}
              initial={{ opacity: 0.25 }}
              animate={
                animated ? {
                  opacity: [0.2, 0.85, 0.2],
                  r: [radius * 0.8, radius * 1.35, radius * 0.8]
                } : undefined
              }
              transition={
                animated ? {
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay
                } : undefined
              }
            />
          );
        })
      )}
    </svg>
  );
};

export default DotPattern;
