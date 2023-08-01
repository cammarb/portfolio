import { Link as PrimerLink } from '@primer/react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
  `
  const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
  `
  return (
    <>
      <Nav>
        <PrimerLink as={Link} to={'/'}>
          cammarb.xyz
        </PrimerLink>
        <LinksContainer>
          <PrimerLink as={Link} to={'https://github.com/cammarb'}>
            <FaGithub />
          </PrimerLink>
          <PrimerLink as={Link} to={'https://linkedin.com/cammarb'}>
            <FaLinkedin />
          </PrimerLink>
        </LinksContainer>
      </Nav>
    </>
  )
}
