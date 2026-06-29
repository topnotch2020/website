import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/set-password" element={<ResetPassword />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}
