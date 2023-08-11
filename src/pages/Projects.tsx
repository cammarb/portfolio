import { Link } from 'react-router-dom'
import Pill from '../components/Pill'

export const Projects = () => {
  return (
    <>
      {/* Web */}
      <div className="flex flex-col gap-3" id="web">
        <h3 className="my-3 font-medium">Web projects</h3>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p> My portfolio</p>
          <Link to="https://github.com/cammarb/portfolio" className="w-fit">
            Repository
          </Link>
          <div className="flex gap-1">
            <Pill language={'Typescript'}></Pill>
            <Pill language={'React + Vite'}></Pill>
          </div>
        </div>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p>Defendly</p>
          <Link to="https://defendly.de/" className="w-fit">
            Live Website
          </Link>
          <div className="flex gap-1">
            <Pill language={'Javascript'} />
            <Pill language={'React + Vite'} />
            <Pill language={'React Redux'} />
            <Pill language={'JWT'} />
            <Pill language={'Python Flask'} />
          </div>
        </div>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p>VS Code Shortcuts</p>
          <Link
            to="https://github.com/cammarb/VSCodeShortcuts.git"
            className="w-fit"
          >
            Repository
          </Link>
          <Link to="https://vscodeshortcuts.pages.dev/" className="w-fit">
            Live Website
          </Link>
          <div className="flex gap-1">
            <Pill language={'Javascript'} />
            <Pill language={'React + Vite'} />
          </div>
        </div>
      </div>

      {/* Other projects */}
      <div className="flex flex-col gap-3" id="other-cool-stuff">
        <h3 className="my-3 font-medium">Other cool stuff I've made</h3>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p>Miley Cyrus API</p>
          <Link to="https://github.com/cammarb/miley-api" className="w-fit">
            Repository
          </Link>
          <div className="flex gap-1">
            <Pill language={'Python Flask'}></Pill>
          </div>
        </div>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p>Dua Lipa - Discord Bot</p>
          <Link to="https://github.com/cammarb/dualipa_bot" className="w-fit">
            Repository
          </Link>
          <div className="flex gap-1">
            <Pill language={'Python'} />
            <Pill language={'Discord API'} />
          </div>
        </div>
        <div className="rounded flex flex-col gap-5 p-7 bg-neutral-800 bg-opacity-40">
          <p>Pomopeep - Pomodoro timer CLI</p>
          <Link to="https://github.com/cammarb/pomopeep" className="w-fit">
            Repository
          </Link>

          <div className="flex gap-1">
            <Pill language={'Python'} />
          </div>
        </div>
      </div>
    </>
  )
}
