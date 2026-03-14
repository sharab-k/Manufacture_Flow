import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'

export default function PasswordSuccessful() {
  const navigate = useNavigate()

  return (
    <main
      className="bg-white"
      style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
        <div className="icon-circle">
          <i className="ph ph-check" style={{ color: 'white', fontSize: '28px', strokeWidth: '4px' }}></i>
        </div>

        <div className="text-center" style={{ marginBottom: '24px' }}>
          <h1 className="font-bold tracking-tight" style={{ fontSize: '26px', color: '#0e1726', marginBottom: '12px', textAlign: 'center' }}>
            Password Reset Successful
          </h1>
          <p style={{ color: '#64748b', fontSize: '14.5px', margin: '0 auto', lineHeight: 1.6, maxWidth: '420px', textAlign: 'center' }}>
            Your password has been updated. You can now sign in with your new password.
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/signin')}
          className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer exact-btn-xs"
          style={{ fontSize: '15px' }}
        >
          Sign In
        </button>
      </div>
    </main>
  )
}
