import { NavLink } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  icon: any;
}

export const NavLinks = ({ to, icon }: NavigationLinkProps) => {
  return <NavLink to={to}>{icon}</NavLink>;
};
