import { useRouteError } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ErrorPage() {
  const error: any = useRouteError()

  return (
    <>
      <Navbar />
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
