import { Link } from 'react-router-dom'
import Pill from '../components/Pill'

interface Project {
  name: string
  repo?: string
  website?: string
  technologies: string[]
}

const webProjects: Project[] = [
  {
    name: 'Hackin2',
    website: 'https://hackin2.com',
    technologies: ['Typescript', 'React', 'Redux'],
  },
  {
    name: 'My Portfolio',
    repo: 'https://github.com/cammarb/portfolio',
    technologies: ['Typescript', 'React'],
  },
  {
    name: 'Defendly',
    website: 'https://defendly.de/',
    technologies: ['Javascript', 'React', 'Redux'],
  },
  {
    name: 'VS Code Shortcuts',
    repo: 'https://github.com/cammarb/VSCodeShortcuts.git',
    website: 'https://vscodeshortcuts.pages.dev/',
    technologies: ['Javascript', 'React'],
  },
]

const otherProjects: Project[] = [
  {
    name: 'Miley Cyrus API',
    repo: 'https://github.com/cammarb/miley-api',
    technologies: ['Python', 'Flask'],
  },
  {
    name: 'Dua Lipa - Discord Bot',
    repo: 'https://github.com/cammarb/dualipa_bot',
    technologies: ['Python', 'Discord API'],
  },
  {
    name: 'Pomopeep - Pomodoro timer CLI',
    repo: 'https://github.com/cammarb/pomopeep',
    technologies: ['Python'],
  },
]

export const Projects = () => {
  return (
    <>
      {/* Web */}
      <div className="flex flex-col gap-3" id="web">
        <h3 className="my-3 font-medium">Web projects</h3>
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded p-7 bg-neutral-800 bg-opacity-40"
          >
            <p>{project.name}</p>
            {project.repo ? (
              <Link to={project.repo} className="w-fit">
                Repository
              </Link>
            ) : (
              <></>
            )}
            {project.website ? (
              <Link to={project.website} className="w-fit">
                Live Website
              </Link>
            ) : (
              <></>
            )}
            <div className="flex gap-1">
              {project.technologies.map((technology, index) => (
                <Pill key={index} language={technology}></Pill>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Other projects */}
      <div className="flex flex-col gap-3" id="other-cool-stuff">
        <h3 className="my-3 font-medium">Other cool stuff I've made</h3>
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded p-7 bg-neutral-800 bg-opacity-40"
          >
            <p>{project.name}</p>
            {project.repo ? (
              <Link to={project.repo} className="w-fit">
                Repository
              </Link>
            ) : (
              <></>
            )}
            {project.website ? (
              <Link to={project.website} className="w-fit">
                Live Website
              </Link>
            ) : (
              <></>
            )}
            <div className="flex gap-1">
              {project.technologies.map((technology, index) => (
                <Pill key={index} language={technology}></Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
