import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <header>Header</header>

      <Outlet />

      <footer>Footer</footer>
    </div>
  )
}
