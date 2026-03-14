import { Link } from 'react-router-dom'
import '../../styles/auth.css'
import { usePasswordToggle } from '../../hooks/usePasswordToggle'

export default function SignInSimple() {
  const [passwordVisible, togglePasswordVisibility] = usePasswordToggle()
  return (
    <main className="grow flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl w-full max-w-[500px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
          <p className="text-slate-500 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-1.5">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-1.5">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-slate-600"
              >
                <i className={`ph ${passwordVisible ? "ph-eye" : "ph-eye-slash"} text-xl`}></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-slate-600">Remember Me</span>
            </label>
            <Link to="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              Forgot Password
            </Link>
          </div>

          <Link
            to="/dashboard"
            className="w-full py-3 px-4 bg-gray-200 hover:bg-gray-300 text-slate-600 font-medium rounded-lg transition-colors cursor-pointer block text-center"
          >
            Sign In
          </Link>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign Up</Link>
        </div>
      </div>
    </main>
  )
}
