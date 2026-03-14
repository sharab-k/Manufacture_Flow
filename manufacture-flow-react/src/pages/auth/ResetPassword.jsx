import { useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { usePasswordToggle } from '../../hooks/usePasswordToggle'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [newPasswordVisible, toggleNewPassword] = usePasswordToggle()
  const [confirmPasswordVisible, toggleConfirmPassword] = usePasswordToggle()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/password-successful')
  }

  return (
    <main
      className="bg-white"
      style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1 className="font-bold tracking-tight" style={{ fontSize: '32px', color: '#0e1726', marginBottom: '12px' }}>
            Create New Password
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px', margin: 0, lineHeight: 1.5 }}>
            Enter a strong new password to secure your account.
          </p>
        </div>

        <form noValidate onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label htmlFor="new_password" className="block font-bold" style={{ fontSize: '15px', color: '#0e1726', marginBottom: '10px' }}>
                New Password
              </label>
              <div className="relative">
                <input
                  type={newPasswordVisible ? 'text' : 'password'}
                  id="new_password"
                  defaultValue="12345678"
                  className="w-full px-4 py-3 border exact-input transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={toggleNewPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <i className={`ph ${newPasswordVisible ? 'ph-eye' : 'ph-eye-slash'}`} style={{ fontSize: '22px', color: '#0e1726' }}></i>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm_password" className="block font-bold" style={{ fontSize: '15px', color: '#0e1726', marginBottom: '10px' }}>
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  id="confirm_password"
                  defaultValue="12345678"
                  className="w-full px-4 py-3 border exact-input transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <i className={`ph ${confirmPasswordVisible ? 'ph-eye' : 'ph-eye-slash'}`} style={{ fontSize: '22px', color: '#0e1726' }}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer exact-btn-sm"
              style={{ fontSize: '16px', marginTop: '8px' }}
            >
              Save Password
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
