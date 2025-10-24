import { Link } from "react-router-dom";
import { Linkedin, AudioWaveform, Github } from "lucide-react";
import { NavLinks } from "@/components/NavLinks";
import { ModeToggle } from "./mode-toggle";

const links = [
  { to: "https://github.com/cammarb", icon: <Github /> },
  { to: "https://linkedin.com/in/cammarb", icon: <Linkedin /> },
  { to: "music", icon: <AudioWaveform /> },
];

export const Header = () => {
  return (
    <nav className="py-3 my-4 mx-6 flex justify-between sm:items-center">
      <div className="flex gap-3 sm:items-center">
        <ModeToggle />
        <Link to={"/"} className="flex gap-1 pt-1 sm:pt-0">
          cammarb
        </Link>
      </div>
      <div className="flex flex-col gap-3 items-end pt-1 sm:pt-0 sm:items-center sm:flex-row sm:gap-12">
        <div className="flex gap-6 items-center">
          <Link to={"projects"} className="ml-4">Projects</Link>
          <Link to={"blog"}>Blog</Link>
        </div>
        <div className="flex gap-4 sm:gap-6">
          {links.map((link) => (
            <NavLinks to={link.to} icon={link.icon} />
          ))}
        </div>
      </div>
    </nav>
  );
};
