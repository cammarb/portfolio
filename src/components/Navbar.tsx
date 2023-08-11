import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'
import { BsMusicNote } from 'react-icons/bs'

export default function Navbar() {
  return (
    <>
      <nav className="py-3 mb-4 flex justify-between items-center">
        <Link to={'/'} className="flex items-center gap-1">
          <HiCode className="text-3xl" />
        </Link>
        <div className="flex gap-6">
          <Link to={'https://github.com/cammarb'}>
            <FaGithub className="text-neutral-50 text-xl" />
          </Link>
          <Link to={'https://linkedin.com/cammarb'}>
            <FaLinkedin className="text-neutral-50 text-xl" />
          </Link>
          <Link to={'music'}>
            <BsMusicNote className="text-neutral-50 text-xl" />
          </Link>
        </div>
      </nav>
    </>
  )
}
