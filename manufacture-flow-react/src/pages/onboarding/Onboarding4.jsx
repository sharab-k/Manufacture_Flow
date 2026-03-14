import { useNavigate } from 'react-router-dom'
import OnboardingStepper from '../../components/OnboardingStepper'
import '../../styles/onboarding.css'

export default function Onboarding4() {
  const navigate = useNavigate()

  return (
    <main className="bg-white flex-grow">
      <div className="onboarding-container">
        <OnboardingStepper activeStep={4} />

        <div className="form-header">
          <h1 className="form-title">Certifications</h1>
          <p className="form-subtitle">Add the primary contact person's details so we can stay in touch with you.</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label className="form-label">Certifications</label>
            <textarea placeholder="e.g. ISO 9001, GMP, FDA" className="form-input form-textarea" style={{ minHeight: '120px' }}></textarea>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" onClick={() => navigate('/onboarding/5')} className="btn-next">Next</button>
            <button type="button" onClick={() => navigate('/onboarding/5')} className="btn-skip">Skip</button>
          </div>
        </form>
      </div>
    </main>
  )
}
