const STEP_LABELS = [
  'Organization Information',
  'Organization Address',
  'Production Capabilities',
  'Certifications',
  'Contact Person',
]

const LINE_WIDTHS = ['10%', '25%', '45%', '65%', '85%']

export default function OnboardingStepper({ activeStep }) {
  return (
    <div className="stepper-container">
      {/* Line background */}
      <div className="step-line-bg"></div>
      {/* Line active */}
      <div className="step-line-active" style={{ width: LINE_WIDTHS[activeStep - 1] }}></div>

      {STEP_LABELS.map((label, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < activeStep
        const isActive = stepNumber === activeStep

        return (
          <div className="step-item" key={stepNumber}>
            <div className={`step-circle ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
              {isCompleted ? (
                <i className="ph ph-check" style={{ color: 'white', fontSize: '16px', fontWeight: 'bold' }}></i>
              ) : isActive ? (
                <div className="step-inner-circle"></div>
              ) : null}
            </div>
            <span className={`step-text ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>{label}</span>
          </div>
        )
      })}
    </div>
  )
}
