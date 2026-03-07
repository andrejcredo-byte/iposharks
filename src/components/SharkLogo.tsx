import React from 'react';

export const SharkLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 512 512" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Simple but professional shark mascot SVG */}
    <path 
      d="M448 256C448 361.6 361.6 448 256 448C150.4 448 64 361.6 64 256C64 150.4 150.4 64 256 64C361.6 64 448 150.4 448 256Z" 
      fill="#1e293b" 
    />
    <path 
      d="M380 220C380 220 320 180 240 200C160 220 120 300 120 300C120 300 180 340 260 320C340 300 380 220 380 220Z" 
      fill="#94a3b8" 
    />
    <path 
      d="M240 200C240 200 260 120 320 100C320 100 300 180 240 200Z" 
      fill="#64748b" 
    />
    <circle cx="320" cy="240" r="8" fill="#ef4444" />
    <path 
      d="M180 280L200 290L180 300L160 290L180 280Z" 
      fill="white" 
    />
    <path 
      d="M220 290L240 300L220 310L200 300L220 290Z" 
      fill="white" 
    />
  </svg>
);
