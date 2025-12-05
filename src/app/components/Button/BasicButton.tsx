"use client"
import React, { useState, useEffect } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const BasicButton: React.FC<ButtonProps> = ({ label, onClick }) => {
  console.log(`❌ Basic Button ("${label}") Rendered!`);

  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    setIsFlashing(true);
    const timer = setTimeout(() => setIsFlashing(false), 50);
    return () => clearTimeout(timer);
  });

  const baseClasses = `
    w-full py-2 px-4 rounded-md font-semibold shadow-md transition-colors
    bg-[#1877F2] text-white
    hover:bg-[#166fe5] active:bg-[#166fe5]

    ${isFlashing ? 'bg-[#fde047] !text-text-muted' : ''}
    transition-all duration-75
  `;

  return (
    <button onClick={onClick} className={baseClasses}>
      {label}
    </button>
  );
};

export default BasicButton;
