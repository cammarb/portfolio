import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <nav className="py-3 my-4 mx-6 flex justify-between sm:items-center">
      <div className="flex gap-3 sm:items-center">
        <ModeToggle />
        <Link to={"/"} className="flex gap-1 pt-1 sm:pt-0">
         Camila Martinez 
        </Link>
      </div>
      <div className="flex flex-col gap-3 items-end pt-1 sm:pt-0 sm:items-center sm:flex-row sm:gap-12">
        <div className="flex gap-6 items-center">
          <Link to={"about-me"} className="ml-4">About Me</Link>
          <Link to={"projects"}>Projects</Link>
          <Link to={"blog"}>Blog</Link>
        </div>
      </div>
    </nav>
  );
};
