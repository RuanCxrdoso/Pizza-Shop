import { Route, Routes } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { Dashboard } from './pages/app/dashboard/Dashboard'
import { Orders } from './pages/app/orders/Orders'
import { SignIn } from './pages/auth/Sign-in'
import { SignUp } from './pages/auth/Sign-up'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}
