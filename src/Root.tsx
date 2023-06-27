import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import { PageLayout } from '@primer/react'
import Footer from './components/Footer'
import Pane from './components/Pane'

export default function Root() {
  return (
    <>
      <PageLayout>
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
    </>
  )
}
