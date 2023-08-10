import { Link } from 'react-router-dom'
import image from '../assets/no time.jpeg'
import { AiFillApple, AiFillYoutube } from 'react-icons/ai'
import { BsSpotify } from 'react-icons/bs'
import { GrSoundcloud } from 'react-icons/gr'

export default function Music() {
  return (
    <>
      <div className="flex justify-center">
        <div className="h-full max-w-xs grid grid-flow-row place-content-center place-items-center">
          <img src={image} className="w-full rounded drop-shadow-md" />
          <div className="w-full grid grid-flow-row gap-3 my-8 mx-auto">
            <Link
              to={
                'https://open.spotify.com/track/7rXGDVMlkU27WjlWgcZbnc?si=a14bba72851b4552'
              }
              className="px-4 py-2 rounded bg-indigo-500 bg-opacity-20 flex items-center"
            >
              <BsSpotify width="20" className="mr-3" />
              "no time" in Spotify
            </Link>
            <Link
              to={
                'https://music.apple.com/us/album/no-time/1557673169?i=1557673170'
              }
              className="px-4 py-2 rounded bg-indigo-500 bg-opacity-20 flex items-center"
            >
              <AiFillApple width="20" className="mr-3" />
              "no time" in Apple Music
            </Link>
            <Link
              to={'https://youtu.be/VyVytZmtNmA'}
              className="px-4 py-2 rounded bg-indigo-500 bg-opacity-20 flex items-center"
            >
              <AiFillYoutube width="20" className="mr-3" />
              "no time" Official Music Video
            </Link>
            <Link
              to={'https://soundcloud.com/camcanta'}
              className="px-4 py-2 rounded bg-indigo-500 bg-opacity-20 flex items-center"
            >
              <GrSoundcloud width="20" className="mr-3" />
              Demos and Covers
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
