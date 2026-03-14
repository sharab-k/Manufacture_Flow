import { useNavigate } from 'react-router-dom'
import OnboardingStepper from '../../components/OnboardingStepper'
import '../../styles/onboarding.css'

export default function Onboarding1() {
  const navigate = useNavigate()

  return (
    <main className="bg-white flex-grow">
      <div className="onboarding-container">
        <OnboardingStepper activeStep={1} />

        <div className="form-header">
          <h1 className="form-title">Organization Information</h1>
          <p className="form-subtitle">Enter your organization's basic details to get started and set up your account.</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label className="form-label">Manufacturer slug/username</label>
            <input type="text" placeholder="Enter slug/username" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Website (optional)</label>
            <input type="url" placeholder="Enter URL" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Description *</label>
            <textarea rows="6" placeholder="Type here" className="form-input form-textarea"></textarea>
          </div>

          <button type="button" onClick={() => navigate('/onboarding/2')} className="btn-next">Next</button>
        </form>
      </div>
    </main>
  )
}
