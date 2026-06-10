import { NavLinks } from "@/components/NavLinks";
import { Linkedin, AudioWaveform, Github } from "lucide-react";

const links = [
  { to: "https://github.com/cammarb", icon: <Github /> },
  { to: "https://linkedin.com/in/cammarb", icon: <Linkedin /> },
  { to: "music", icon: <AudioWaveform /> },
];

export const Footer = () => {
  return (
    <>
      <footer className="py-4 text-center">
        <div className="justify-center flex gap-4 mb-4">
          {links.map((link) => (
            <NavLinks key={link.to} to={link.to} icon={link.icon} />
          ))}
        </div>
        <p>© 2026 Camila Martinez. All rights reserved</p>
      </footer>
    </>
  );
};
