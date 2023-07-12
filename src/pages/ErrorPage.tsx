import { PageLayout } from '@primer/react'
import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Pane from '../components/Pane'
import Footer from '../components/Footer'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  return (
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
  )
}

export default ErrorPage
