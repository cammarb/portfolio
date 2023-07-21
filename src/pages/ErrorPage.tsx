import { PageLayout } from '@primer/react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pane from '../components/Pane'
import Footer from '../components/Footer'
import { themeGet } from '@primer/react'
import styled from 'styled-components'

function ErrorPage() {
  const BgColor = styled.div`
    background-color: ${themeGet('colors.canvas.default')};
  `
  const error = useRouteError()
  console.error(error)
  return (
    <BgColor>
      <PageLayout>
        <PageLayout.Header divider="line">
          <Navbar />
        </PageLayout.Header>
        <PageLayout.Content>
          <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
        </PageLayout.Content>
        <PageLayout.Pane position={'start'}>
          <Pane />
        </PageLayout.Pane>
        <PageLayout.Footer divider="line">
          <Footer />
        </PageLayout.Footer>
      </PageLayout>
    </BgColor>
  )
}

export default ErrorPage
