import { useNavigate } from 'react-router-dom'
import OnboardingStepper from '../../components/OnboardingStepper'
import '../../styles/onboarding.css'

export default function Onboarding2() {
  const navigate = useNavigate()

  return (
    <main className="bg-white flex-grow">
      <div className="onboarding-container">
        <OnboardingStepper activeStep={2} />

        <div className="form-header">
          <h1 className="form-title">Organization Address</h1>
          <p className="form-subtitle">Provide your organization's official address for verification and billing purposes.</p>
        </div>

        <form className="onboarding-form">
          <div className="form-group">
            <label className="form-label">Address Line 1</label>
            <input type="text" placeholder="Street Address" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Address Line 2 (optional)</label>
            <input type="text" placeholder="Apartment, suite, etc." className="form-input" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">City</label>
              <input type="text" placeholder="Enter City Name" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">State/Province</label>
              <div className="select-wrapper">
                <select className="form-input form-select" defaultValue="">
                  <option value="" disabled>Select State</option>
                  <option value="CA">California</option>
                  <option value="NY">New York</option>
                </select>
                <i className="ph ph-caret-down select-icon"></i>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Postal Code</label>
              <input type="text" placeholder="Enter Postal Code" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Country</label>
              <div className="select-wrapper">
                <select className="form-input form-select" defaultValue="">
                  <option value="" disabled>Select Country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                </select>
                <i className="ph ph-caret-down select-icon"></i>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" onClick={() => navigate('/onboarding/3')} className="btn-next">Next</button>
            <button type="button" onClick={() => navigate('/onboarding/3')} className="btn-skip">Skip</button>
          </div>
        </form>
      </div>
    </main>
  )
}
