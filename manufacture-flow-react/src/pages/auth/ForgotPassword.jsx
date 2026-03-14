import { Link, useNavigate } from 'react-router-dom'
import '../../styles/auth.css'

export default function ForgotPassword() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/verify-email')
  }

  return (
    <main
      className="bg-white"
      style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1 className="font-bold tracking-tight" style={{ fontSize: '32px', color: '#0e1726', marginBottom: '12px' }}>
            Forgot Password
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>
            Please enter the email associated with your account. We'll send you a link to reset your password.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label htmlFor="email" className="block font-bold" style={{ fontSize: '15px', color: '#0e1726', marginBottom: '10px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="emilyparker@gmail.com"
                className="w-full px-4 py-3 border exact-input transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer exact-btn-sm"
              style={{ fontSize: '16px', marginTop: '8px' }}
            >
              Send
            </button>
          </div>
        </form>

        <div className="text-center font-medium" style={{ fontSize: '16px', color: '#0e1726', marginTop: '40px' }}>
          Back to
          <Link to="/signin" className="font-bold ml-1 exact-link">Sign In</Link>
        </div>
      </div>
    </main>
  )
}
