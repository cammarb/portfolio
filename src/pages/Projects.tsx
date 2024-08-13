import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { 
    name: 'Hackin2 - Bounty Platform for physical pentesters',
     stack: 'Typescript - ExpressJS, React, PostgreSQL, Redis'
  },
  { 
    name: 'Reserve Sonic - Booking Platform for rehearsal rooms / music studios',
     stack: 'Java - Spring Boot, PostgreSQL, HTML, CSS, Javascript'
  },
  { 
    name: 'Miley Cyrus API',
     stack: 'Python - Flask, PostgreSQL, HTML, CSS, Javascript'
  },
  { 
    name: 'Dua Lipa Discord Bot',
     stack: 'Python - Discord API, Google Custom Search API'
  },
]

export const Projects = () => {
  return (
    <>
      <div className="mx-6 my-16">
        <div className="my-6">
          <Button asChild>
            <Link to={"/"} className="flex gap-2">
              <ArrowLeft size={13} />
              Back
            </Link>
          </Button>
          <div className="my-8 flex flex-col gap-2">
            <h1 className="text-2xl">Projects</h1>
            <p>Some projects I've worked / I'm working on</p>
          </div>
        </div>
        <main>
          <div className="flex flex-col gap-4">
            {projects.map((project)=>(
              <div>
                <p>{project.name}</p>
                <p className="text-sm">{project.stack}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
