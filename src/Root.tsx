import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { PageLayout } from '@primer/react'
import Footer from './components/Footer'
import Pane from './components/Pane'
import { themeGet } from '@primer/react'
import styled from 'styled-components'

export default function Root() {
  const BgColor = styled.div`
    background-color: ${themeGet('colors.canvas.default')};
    min-height: 100vh;
  `
  return (
    <>
      <BgColor className="bg-color">
        <PageLayout sx={{}}>
          <PageLayout.Header divider="line">
            <Navbar />
          </PageLayout.Header>
          <PageLayout.Content>
            <Outlet />
          </PageLayout.Content>
          <PageLayout.Pane position={'start'}>
            <Pane />
          </PageLayout.Pane>
          <PageLayout.Footer divider="line">
            <Footer />
          </PageLayout.Footer>
        </PageLayout>
      </BgColor>
    </>
  )
}
