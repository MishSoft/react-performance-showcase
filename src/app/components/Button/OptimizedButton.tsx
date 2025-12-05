import React from 'react'

interface OptimizedButtonProps  {
  label: string,
  onClick: () => void
}

const OptimizedButton: React.FC<OptimizedButtonProps> = React.memo(({ label, onClick }) => {
  console.log(`✅ Optimized Button ("${label}") Rendered!`);

  const baseClasses = `
    bg-[#1877F2]
    text-white
    py-2 px-4
    rounded-md
    font-semibold
    shadow-md
    transition-colors
    hover:bg-[#166fe5]
    active:bg-[#166fe5]
  `;

  return (
    <button className={baseClasses} onClick={onClick}>
      {label}
    </button>
  )
})

OptimizedButton.displayName = 'OptimizedButton'

export default OptimizedButton
