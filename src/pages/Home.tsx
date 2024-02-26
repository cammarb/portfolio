import { Link } from 'react-router-dom'
import Button from '../components/Button'
import profile from '../assets/IMG_0152.png'

export default function Home() {
  return (
    <>
      <div
        id="heading"
        className="w-full min-h-[80vh] flex flex-col gap-8 justify-center overflow-hidden md:flex-row"
      >
        <span id="purple-ball" />
        <div className="flex flex-col justify-center gap-8 mx-auto mt-10">
          <h1>Hey, I'm Camila</h1>
          <p className="my-5 text-2xl">
            I'm a full-stack developer and tech enthusiast. <br />
            Sometimes I make music, you can check it out{' '}
            <Link to={'music'}>here</Link>. <br />
            <span className="text-xl text-neutral-200">
              Currently working in IT in Berlin.
            </span>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-10">
            <Link to={'projects'}>
              <Button text={'Check out my web projects'} />
            </Link>
            <Link
              to={'projects#other-cool-stuff'}
              className="my-auto text-white"
            >
              Other projects
            </Link>
          </div>
        </div>
        {/* <div className="mx-auto md:w-[40%] flex flex-col justify-center">
          <img src={profile} alt="profile" className="max-w-md rounded-lg" />
        </div> */}
      </div>
    </>
  )
}
