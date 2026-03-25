import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'

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
