const steps = ['Invited', 'In Discussion', 'Proposal Submitted', 'Matched', 'Completed']

export default function BriefArrowStepper({ activeStep = 2 }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
      <div className="flex items-stretch h-[72px]">
        {steps.map((label, i) => {
          const stepNum = i + 1
          const isCompleted = stepNum < activeStep
          const isActive = stepNum === activeStep
          const isLast = i === steps.length - 1

          return (
            <div key={i} className="relative flex-1 flex items-center justify-center gap-3 bg-white px-4">
              {isCompleted ? (
                <div className="w-8 h-8 rounded-full bg-[#448ae6] flex items-center justify-center text-white">
                  <i className="ph ph-check text-lg"></i>
                </div>
              ) : isActive ? (
                <div className="w-8 h-8 rounded-full border-2 border-[#448ae6] flex items-center justify-center text-[#448ae6] text-[12px] font-bold">
                  {String(stepNum).padStart(2, '0')}
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-400 text-[12px] font-bold">
                  {String(stepNum).padStart(2, '0')}
                </div>
              )}
              <span className={`text-[12px] font-bold ${isActive ? 'text-[#448ae6]' : isCompleted ? 'text-slate-900' : 'text-slate-500'}`}>
                {label}
              </span>
              {!isLast && (
                <div className="absolute right-0 top-0 bottom-0 z-10" style={{ width: '12px' }}>
                  <svg width="12" height="72" viewBox="0 0 12 72" fill="none" className="h-full w-full">
                    <path d="M0 0L12 36L0 72" stroke="#e2e8f0" strokeWidth="1" />
                  </svg>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
