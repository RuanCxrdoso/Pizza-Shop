import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { Dashboard } from './pages/app/Dashboard'
import { SignIn } from './pages/auth/Sign-in'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}
