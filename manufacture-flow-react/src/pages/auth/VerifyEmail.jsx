import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'

export default function VerifyEmail() {
  const navigate = useNavigate()

  return (
    <main
      className="bg-white"
      style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
        <div className="icon-circle">
          <i className="ph ph-envelope-simple" style={{ color: 'white', fontSize: '28px' }}></i>
        </div>

        <div className="text-center" style={{ marginBottom: '20px' }}>
          <h1 className="font-bold tracking-tight" style={{ fontSize: '26px', color: '#0e1726', marginBottom: '12px', textAlign: 'center' }}>
            Verify Your Email
          </h1>
          <p style={{ color: '#64748b', fontSize: '14.5px', margin: '0 auto', lineHeight: 1.6, maxWidth: '420px', textAlign: 'center' }}>
            We've sent a verification link to your email address. Please click the link to verify your account.
            If you don't see it, please check your spam folder.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/account-verified')}
          className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer exact-btn-xs"
          style={{ fontSize: '15px' }}
        >
          Sign In
        </button>
      </div>
    </main>
  )
}
