import { Link } from "react-router-dom";

export default function VerifyEmail() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 shrink-0 h-18 sticky top-0 z-50">
        <div className="max-w-310 mx-auto w-full h-full flex items-center justify-between">
          <Link to="/dashboard" className="flex items-center gap-2">
            <img src={require('../../assets/images/donau-logo.png')} alt="Logo" className="h-7 w-auto" />
          </Link>
          <div className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-900">
            <img src="https://flagcdn.com/w20/gb.png" srcSet="https://flagcdn.com/w40/gb.png 2x" width="20" alt="English" />
            <span className="font-medium text-sm">English</span>
            <i className="ph ph-caret-down text-xs"></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white grow flex items-center justify-center p-4">
        <div style={{ width: "100%", maxWidth: 440, margin: "0 auto", textAlign: "center" }}>
          <div className="icon-circle" style={{ backgroundColor: "#448ae6", width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px auto" }}>
            <i className="ph ph-envelope-simple" style={{ color: "white", fontSize: 28 }}></i>
          </div>
          <div className="text-center" style={{ marginBottom: 20 }}>
            <h1 className="font-bold tracking-tight" style={{ fontSize: 26, color: "#0e1726", marginBottom: 12, textAlign: "center" }}>Verify Your Email</h1>
            <p style={{ color: "#64748b", fontSize: 14.5, margin: "0 auto", lineHeight: 1.6, maxWidth: 420, textAlign: "center" }}>
              We've sent a verification link to your email address. Please click the link to verify your account. If you don't see it, please check your spam folder.
            </p>
          </div>
          <Link to="/account-verified">
            <button type="button" className="w-full flex items-center justify-center text-white font-bold transition-all cursor-pointer" style={{ backgroundColor: "#448ae6", height: 40, borderRadius: 6, border: "none", outline: "none", fontSize: 15 }}>
              Sign In
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full pb-14 flex flex-col items-center gap-6 text-[14px] text-[#334155]">
        <div className="flex items-center gap-3">
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <span className="text-slate-300 font-light">|</span>
          <Link to="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
        </div>
        <div className="flex items-center gap-2 text-[#64748b]">
          <span>&copy; 2026 DonauAI</span>
        </div>
      </footer>
    </div>
  );
}
