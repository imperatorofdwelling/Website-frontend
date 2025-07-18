import React from 'react'

interface StepIndicatorProps {
  currentStep?: number
  totalSteps?: number
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep = 1,
  totalSteps = 4,
}) => {
  return (
    <div>
      <div className="text-sm font-medium mb-2">Step {currentStep}</div>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`flex-1 h-1 rounded-sm ${
              index + 1 === currentStep ? 'bg-[#006BE6]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default StepIndicator
