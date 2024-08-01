import { IconType } from 'react-icons'
import { NavLink } from 'react-router-dom'

interface NavigationLinkProps {
  to: string
  icon: IconType
}

export default function NavigationLink({ to, icon: Icon }: NavigationLinkProps) {
  return <NavLink to={to}>
    <Icon className="p-1 text-neutral-50 text-3xl rounded-md hover:bg-indigo-500 hover:bg-opacity-40" />
  </NavLink>
}
