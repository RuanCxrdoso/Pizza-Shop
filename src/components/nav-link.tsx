import { Link, LinkProps, useLocation } from 'react-router-dom'
// NavLinkProps recebe todas as possíveis props que um Link do router dom pode receber
export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
