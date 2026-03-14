import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/PasswordInput'
import '../../styles/auth.css'

export default function SignUp() {
  const navigate = useNavigate()

  return (
    <main className="grow flex items-center justify-center px-4 py-8">
      <div className="bg-white p-6 md:p-10 rounded-2xl w-full max-w-[600px]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Create your account</h1>
          <p className="text-slate-500 text-sm">Start connecting with trusted partners today</p>
        </div>

        <form className="space-y-5">
          {/* Account Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-900 mb-2">I am a</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="border rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all flex items-start gap-3 group has-checked:border-blue-500 has-checked:bg-blue-50 has-checked:ring-1 has-checked:ring-blue-500">
                <input type="radio" name="account_type" value="brand" className="hidden" />
                <div className="p-2 bg-gray-100 rounded-lg group-has-checked:bg-blue-100 text-slate-500 group-has-checked:text-blue-600">
                  <i className="ph ph-buildings text-xl"></i>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-slate-900">Brand</span>
                  <span className="block text-xs text-slate-500">Looking for manufacturers</span>
                </div>
              </label>
              <label className="border rounded-xl p-4 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all flex items-start gap-3 group has-checked:border-blue-500 has-checked:bg-blue-50 has-checked:ring-1 has-checked:ring-blue-500">
                <input type="radio" name="account_type" value="manufacturer" className="hidden" defaultChecked />
                <div className="p-2 bg-gray-100 rounded-lg group-has-checked:bg-blue-100 text-slate-500 group-has-checked:text-blue-600">
                  <i className="ph ph-factory text-xl"></i>
                </div>
                <div>
                  <span className="block text-sm font-semibold text-slate-900">Manufacturer</span>
                  <span className="block text-xs text-slate-500">Looking for clients</span>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-semibold text-slate-900 mb-1.5">First Name</label>
              <input type="text" id="first_name" placeholder="Enter First Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-semibold text-slate-900 mb-1.5">Last Name</label>
              <input type="text" id="last_name" placeholder="Enter First Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
            </div>
          </div>

          <div>
            <label htmlFor="org_name" className="block text-sm font-semibold text-slate-900 mb-1.5">Organization Name</label>
            <input type="text" id="org_name" placeholder="Enter Organization Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>

          <div>
            <label htmlFor="work_email" className="block text-sm font-semibold text-slate-900 mb-1.5">Work Email</label>
            <input type="email" id="work_email" placeholder="Enter Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-1.5">Password</label>
            <PasswordInput
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
            />
          </div>

          <div>
            <label htmlFor="confirm_password" className="block text-sm font-semibold text-slate-900 mb-1.5">Confirm Password</label>
            <PasswordInput
              id="confirm_password"
              placeholder="Re-enter Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-slate-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all pr-10"
            />
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="terms"
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
            <label htmlFor="terms" className="text-sm text-slate-600 leading-tight">
              By creating an account, you agree to our{' '}
              <Link to="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="button"
            onClick={() => navigate('/verify-email')}
            className="w-full py-3.5 px-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-lg transition-all cursor-pointer text-[15px] shadow-sm hover:shadow-md"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 font-medium hover:underline">Sign In</Link>
        </div>
      </div>
    </main>
  )
}
