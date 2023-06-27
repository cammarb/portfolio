import { Heading } from '@primer/react'
import { Link } from 'react-router-dom'
import { MarkGithubIcon } from '@primer/octicons-react'

export default function Navbar() {
  return (
    <>
      <Heading sx={{ mb: 2 }} className="">
        <nav>
          <Link to={'https://github.com/cammarb'}>
            <MarkGithubIcon />
          </Link>
        </nav>
      </Heading>
    </>
  )
}
