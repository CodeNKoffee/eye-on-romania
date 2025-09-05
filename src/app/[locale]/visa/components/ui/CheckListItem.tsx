"use client";
import { useState } from 'react';

interface ChecklistItemProps {
  text: string;
}

export default function ChecklistItem({ text }: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div 
      className="flex items-start gap-3 p-3 sm:p-4 rounded-lg hover:bg-danube-mist/30 active:bg-danube-mist/40 transition-colors cursor-pointer select-none touch-manipulation"
      onClick={toggleCheck}
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleCheck();
        }
      }}
    >
      <div 
        className={`w-5 h-5 border-2 rounded flex-shrink-0 mt-0.5 transition-all duration-200 flex items-center justify-center ${
          isChecked 
            ? 'border-carpathian-forest bg-carpathian-forest' 
            : 'border-tricolor-blue hover:border-carpathian-forest/60'
        }`}
      >
        {isChecked && (
          <svg 
            className="w-3 h-3 text-white" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        )}
      </div>
      <span 
        className={`transition-colors duration-200 text-sm sm:text-base leading-relaxed ${
          isChecked 
            ? 'text-transylvanian-stone/60 line-through' 
            : 'text-transylvanian-stone'
        }`}
      >
        {text}
      </span>
    </div>
  );
}