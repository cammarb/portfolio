import { CircleOcticon, Header } from '@primer/react'
import { Link } from 'react-router-dom'
import { MarkGithubIcon } from '@primer/octicons-react'
import { LinkedinPlain } from 'devicons-react'

export default function Navbar() {
  return (
    <>
      <Header sx={{ mb: 2 }}>
        <Header.Item>
          <Link to="https://github.com/cammarb">
            <CircleOcticon icon={MarkGithubIcon} size={16} sx={{ mr: 2 }} />
          </Link>
        </Header.Item>
        <Header.Item>
          <Link to="https://linkedin.com/cammarb">
            <LinkedinPlain />
          </Link>
        </Header.Item>
      </Header>
    </>
  )
}
