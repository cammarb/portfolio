import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <Link to={"https://github.com/cammarb"}>Github</Link>
        </nav>
      </header>
    </>
  );
}
