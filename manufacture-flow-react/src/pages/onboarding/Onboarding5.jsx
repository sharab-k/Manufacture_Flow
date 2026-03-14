import { useNavigate } from 'react-router-dom'
import OnboardingStepper from '../../components/OnboardingStepper'
import '../../styles/onboarding.css'

export default function Onboarding5() {
  const navigate = useNavigate()

  return (
    <main className="bg-white flex-grow">
      <div className="onboarding-container">
        <OnboardingStepper activeStep={5} />

        <div className="form-header">
          <h1 className="form-title">Contact Person</h1>
          <p className="form-subtitle">Add the primary contact person's details so we can stay in touch with you.</p>
        </div>

        <form className="onboarding-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" placeholder="Enter First Name" className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input type="text" placeholder="Enter Last Name" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" placeholder="Enter Email" className="form-input" />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input type="tel" placeholder="Enter Phone Number" className="form-input" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button type="button" onClick={() => navigate('/signin')} className="btn-next">Next</button>
            <button type="button" onClick={() => navigate('/signin')} className="btn-skip">Skip</button>
          </div>
        </form>
      </div>
    </main>
  )
}
