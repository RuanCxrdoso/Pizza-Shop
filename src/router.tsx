import { Route, Routes } from 'react-router-dom'

import { Dashboard } from './pages/app/Dashboard'
import { SignIn } from './pages/auth/Sign-in'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  )
}
