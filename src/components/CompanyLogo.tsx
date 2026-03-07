import React, { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CompanyLogoProps {
  src?: string;
  name: string;
  className?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ src, name, className }) => {
  const [error, setError] = useState(false);

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getBgColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-emerald-500',
      'bg-violet-500',
      'bg-amber-500',
      'bg-rose-500',
      'bg-indigo-500',
      'bg-cyan-500',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  if (!src || error) {
    return (
      <div 
        className={cn(
          "flex items-center justify-center text-white font-black uppercase",
          getBgColor(name),
          className
        )}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt={name}
      className={cn("object-cover", className)}
      onError={() => setError(true)}
    />
  );
};
