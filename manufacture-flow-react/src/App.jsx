import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

// Layouts
import PublicLayout from './layouts/PublicLayout'
import AuthLayout from './components/layouts/AuthLayout'
import DashboardLayout from './components/layouts/DashboardLayout'

// Auth Pages
import AccountVerified from './pages/auth/AccountVerified'
import ForgotPassword from './pages/auth/ForgotPassword'
import PasswordSuccessful from './pages/auth/PasswordSuccessful'
import ResetPassword from './pages/auth/ResetPassword'
import SignIn from './pages/auth/SignIn'
import SignInSimple from './pages/auth/SignInSimple'
import SignUp from './pages/auth/SignUp'
import VerifyEmail from './pages/auth/VerifyEmail'

// Briefs Pages
import AIBriefAssistant from './pages/briefs/AIBriefAssistant'
import BriefDetail from './pages/briefs/BriefDetail'
import BriefDetailChat from './pages/briefs/BriefDetailChat'
import BriefDetailProposal from './pages/briefs/BriefDetailProposal'
import BriefDetailProposalSubmitted from './pages/briefs/BriefDetailProposalSubmitted'
import BriefDetailSubmitProposals from './pages/briefs/BriefDetailSubmitProposals'
import Briefs from './pages/briefs/Briefs'
import SubmitProposal from './pages/briefs/SubmitProposal'

// Dashboard Pages
import DashboardEmpty from './pages/dashboard/DashboardEmpty'
import DashboardFilled from './pages/dashboard/DashboardFilled'

// Messages Pages
import Messages from './pages/messages/Messages'
import MessagesEmpty from './pages/messages/MessagesEmpty'

// Onboarding Pages
import Onboarding1 from './pages/onboarding/Onboarding1'
import Onboarding2 from './pages/onboarding/Onboarding2'
import Onboarding3 from './pages/onboarding/Onboarding3'
import Onboarding4 from './pages/onboarding/Onboarding4'
import Onboarding5 from './pages/onboarding/Onboarding5'

// Public Pages
import APIDocumentation from './pages/public/APIDocumentation'
import AboutUs from './pages/public/AboutUs'
import Contact from './pages/public/Contact'
import ForBrands from './pages/public/ForBrands'
import ForManufacturers from './pages/public/ForManufacturers'
import HelpCenter from './pages/public/HelpCenter'
import Home from './pages/public/Home'
import PrivacyPolicy from './pages/public/PrivacyPolicy'
import ProductCategories from './pages/public/ProductCategories'
import SuccessStories from './pages/public/SuccessStories'
import TermsOfService from './pages/public/TermsOfService'

// Settings Pages
import SettingsAccount from './pages/settings/SettingsAccount'
import SettingsManufacturer from './pages/settings/SettingsManufacturer'
import SettingsSecurity from './pages/settings/SettingsSecurity'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes — use PublicLayout */}
          <Route element={<PublicLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/for-brands" element={<ForBrands />} />
            <Route path="/for-manufacturers" element={<ForManufacturers />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/api-documentation" element={<APIDocumentation />} />
            <Route path="/product-categories" element={<ProductCategories />} />
          </Route>

          {/* Auth Routes — use AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route path="/" element={<SignInSimple />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/account-verified" element={<AccountVerified />} />
            <Route path="/password-successful" element={<PasswordSuccessful />} />

            {/* Onboarding Routes — also use AuthLayout */}
            <Route path="/onboarding/1" element={<Onboarding1 />} />
            <Route path="/onboarding/2" element={<Onboarding2 />} />
            <Route path="/onboarding/3" element={<Onboarding3 />} />
            <Route path="/onboarding/4" element={<Onboarding4 />} />
            <Route path="/onboarding/5" element={<Onboarding5 />} />
          </Route>

          {/* Dashboard Routes — use DashboardLayout & ProtectedRoute */}
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardFilled />} />
              <Route path="/dashboard-empty" element={<DashboardEmpty />} />
              <Route path="/briefs" element={<Briefs />} />
              <Route path="/brief-detail" element={<BriefDetail />} />
              <Route path="/brief-detail-proposal" element={<BriefDetailProposal />} />
              <Route path="/brief-detail-proposal-submitted" element={<BriefDetailProposalSubmitted />} />
              <Route path="/brief-detail-submit-proposals" element={<BriefDetailSubmitProposals />} />
              <Route path="/brief-detail-chat" element={<BriefDetailChat />} />
              <Route path="/submit-proposal" element={<SubmitProposal />} />
              <Route path="/ai-brief-assistant" element={<AIBriefAssistant />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/messages-empty" element={<MessagesEmpty />} />
              <Route path="/settings/account" element={<SettingsAccount />} />
              <Route path="/settings/manufacturer" element={<SettingsManufacturer />} />
              <Route path="/settings/security" element={<SettingsSecurity />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
