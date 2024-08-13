import { Link } from "react-router-dom";
import image from "../assets/no time.jpeg";
import { Button } from "@/components/ui/button";

export const Music = () => {
  return (
    <>
      <div className="my-16 flex justify-center">
        <div className="h-full max-w-xs grid grid-flow-row place-content-center place-items-center">
          <img src={image} className="w-48 rounded drop-shadow-md" />
          <div className="w-full grid grid-flow-row gap-3 my-8 mx-auto">
            <Button variant="secondary" asChild>
              <Link
                to={
                  "https://open.spotify.com/track/7rXGDVMlkU27WjlWgcZbnc?si=a14bba72851b4552"
                }
              >
                Stream "no time" in Spotify
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link
                to={
                  "https://music.apple.com/us/album/no-time/1557673169?i=1557673170"
                }
              >
                Stream "Pretty Eyes" in Spotify
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to={"https://youtu.be/VyVytZmtNmA"}>
                Watch "no time" Official Music Video
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to={"https://soundcloud.com/camcanta"}>
                Demos and Covers
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
