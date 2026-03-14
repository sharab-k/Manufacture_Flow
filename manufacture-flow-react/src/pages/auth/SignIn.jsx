import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/auth.css'
import { usePasswordToggle } from '../../hooks/usePasswordToggle'

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('**********')
  const [passwordVisible, togglePasswordVisibility] = usePasswordToggle()
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const validateEmail = (value) => {
    const isValid = value.trim().length > 0
    if (isValid) setEmailError(false)
    return isValid
  }

  const validatePassword = (value) => {
    const isValid = value.trim().length >= 6
    if (isValid) setPasswordError(false)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    if (!isEmailValid) setEmailError(true)
    if (!isPasswordValid) setPasswordError(true)

    if (isEmailValid && isPasswordValid) {
      navigate('/dashboard')
    }
  }

  return (
    <main
      className="bg-white"
      style={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '4rem 1rem' }}
    >
      <div style={{ width: '100%', maxWidth: '440px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h1 className="font-bold tracking-tight" style={{ fontSize: '32px', color: '#0e1726', marginBottom: '12px' }}>
            Welcome Back
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '16px', margin: 0 }}>
            Enter your credentials to access your account
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
                className={`w-full px-4 py-3 border exact-input transition-all ${emailError ? 'error-border' : ''}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail(e.target.value)
                }}
              />
              {emailError && (
                <div className="flex items-center gap-2 mt-2 error-text text-sm font-medium animate-fade-in">
                  <i className="ph-fill ph-warning-circle text-base"></i>
                  <span>Incorrect email. Please try again</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block font-bold" style={{ fontSize: '15px', color: '#0e1726', marginBottom: '10px' }}>
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className={`w-full px-4 py-3 border exact-input exact-input-active transition-all pr-12 ${passwordError ? 'error-border' : ''}`}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    validatePassword(e.target.value)
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <i className={`ph ${passwordVisible ? 'ph-eye' : 'ph-eye-slash'}`} style={{ fontSize: '22px' }}></i>
                </button>
              </div>
              {passwordError && (
                <div className="flex items-center gap-2 mt-2 error-text text-sm font-medium animate-fade-in">
                  <i className="ph-fill ph-warning-circle text-base"></i>
                  <span>Incorrect password. Please try again</span>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '4px' }}>
              <label className="cursor-pointer group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="peer appearance-none border bg-white exact-checkbox transition-all cursor-pointer"
                  />
                  <i className="ph ph-check absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" style={{ fontSize: '14px' }}></i>
                </div>
                <span className="font-medium transition-colors" style={{ fontSize: '15px', color: '#94a3b8' }}>Remember Me</span>
              </label>
              <Link to="/forgot-password" className="font-bold exact-link transition-colors" style={{ fontSize: '15px' }}>
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer exact-btn"
              style={{ fontSize: '16px', marginTop: '8px' }}
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center font-medium" style={{ fontSize: '16px', color: '#0e1726', marginTop: '40px' }}>
          Don't have an account?
          <Link to="/signup" className="font-bold ml-1 exact-link">Sign Up</Link>
        </div>
      </div>
    </main>
  )
}
