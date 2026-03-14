import { useNavigate } from 'react-router-dom'
import OnboardingStepper from '../../components/OnboardingStepper'
import '../../styles/onboarding.css'

export default function Onboarding3() {
  const navigate = useNavigate()

  return (
    <main className="bg-white flex-grow">
      <div className="onboarding-container">
        <OnboardingStepper activeStep={3} />

        <div className="form-header">
          <h1 className="form-title">Production Capabilities</h1>
          <p className="form-subtitle">Add the primary contact person's details so we can stay in touch with you.</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label className="form-label">Product Category</label>
            <input type="text" placeholder="e.g. Knitwear, Denim, Activewear" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Monthly Capacity</label>
            <input type="text" placeholder="e.g. 50,000 units" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Minimum Order Qty</label>
            <input type="text" placeholder="e.g. 500 units" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Lead Time</label>
            <input type="text" placeholder="e.g. 4-8 weeks" className="form-input" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" onClick={() => navigate('/onboarding/4')} className="btn-next">Next</button>
            <button type="button" onClick={() => navigate('/onboarding/4')} className="btn-skip">Skip</button>
          </div>
        </form>
      </div>
    </main>
  )
}
