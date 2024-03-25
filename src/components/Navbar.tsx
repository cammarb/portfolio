import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { BsMusicNote } from 'react-icons/bs'
import NavigationLink from './NavigationLink'

const links = [
  { to: 'https://github.com/cammarb', icon: FaGithub },
  { to: 'https://linkedin.com/in/cammarb', icon: FaLinkedin },
  { to: 'music', icon: BsMusicNote },
]

export default function Navbar() {
  return (
    <nav className="py-3 mb-4 flex justify-between items-center">
      <Link to={'/'} className="flex items-center gap-1">
        <HiCode className="text-3xl" />
      </Link>
      <div className="flex gap-6">
        {links.map((link) => (
          <NavigationLink to={link.to} icon={link.icon}/>
        ))}
      </div>
    </nav>
  )
}
