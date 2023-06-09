import { GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <Link to={"https://github.com/cammarb"}>
            <GitHub />
          </Link>
        </nav>
      </header>
    </>
  );
}
