import { Link } from 'react-router-dom'
import Pill from '../components/Pill'

export const Projects = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="my-3">My projects</p>
        <div className="flex flex-col gap-3 p-5">
          <p> My portfolio</p>
          <Link to="https://github.com/cammarb/portfolio">Repository</Link>
          <div>
            <Pill language={'Typescript'}></Pill>
            <Pill language={'React + Vite'}></Pill>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <p>Defendly</p>
          <Link to="https://defendly.de/">Live Website</Link>
          <div>
            <Pill language={'Javascript'} />
            <Pill language={'React + Vite'} />
            <Pill language={'Python Flask'} />
          </div>
        </div>
        <div>
          <p>VS Code Shortcuts</p>
          <Link to="https://github.com/cammarb/VSCodeShortcuts.git">
            Repository
          </Link>
          <Link to="https://vscodeshortcuts.pages.dev/">Live Website</Link>
          <div>
            <Pill language={'Javascript'} />
            <Pill language={'React + Vite'} />
            <Pill language={'Express JS'} />
          </div>
        </div>
      </div>
    </>
  )
}
