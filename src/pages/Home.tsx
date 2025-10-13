import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div
        id="heading"
        className="w-full min-h-[80vh] flex flex-col gap-8 justify-center overflow-hidden md:flex-row"
      >
        <span id="purple-ball" />
        <div className="flex flex-col justify-center gap-8 mx-6 sm:mx-auto mt-10">
          <h1 className="text-xl">Hey, I'm Camila</h1>
          <p className="my-5 text-2xl">
            I'm a software engineer and tech enthusiast. <br />
            Sometimes I make music, you can check it out{" "}
            <Link to={"music"} className="font-bold underline underline-offset-4">here</Link>. <br />
            <span className="text-lg">Currently working in Berlin.</span>
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-10">
            <Link to={"projects"}>
              <Button>Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
