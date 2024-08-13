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
    <nav className="py-3 my-4 mx-6 flex justify-between items-center">
      <Link to={"/"} className="flex items-center gap-1">
        cammarb
      </Link>

      <div className="flex gap-12 items-center">
        <div className="flex gap-6 items-center">
          <ModeToggle />
          <Link to={"projects"} className="ml-4">Projects</Link>
          <Link to={"blog"}>Blog</Link>
          <Link to={"tools"}>Tools</Link>
        </div>
        <div className="flex gap-6">
          {links.map((link) => (
            <NavLinks to={link.to} icon={link.icon} />
          ))}
        </div>
      </div>
    </nav>
  );
};
