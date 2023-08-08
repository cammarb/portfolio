import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <div id="heading">
        <h1>Hey, I'm Camila</h1>
        <p className="text-2xl my-5">
          I'm a full-stack developer and tech enthusiast. Currently working in
          IT in Berlin. Sometimes I make music, you can check it out{' '}
          <Link to={'music'}>here</Link>.
        </p>
        <div>
          <Link to={'projects'}>
            <Button text={'Check my web projects'} />
          </Link>
          <Link to={''} />
        </div>
      </div>
    </>
  )
}
