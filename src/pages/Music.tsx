import { Link } from 'react-router-dom'
import image from '../assets/no time.jpeg'
import { ActionList, Avatar, Box } from '@primer/react'
import { BsApple, BsSpotify, BsYoutube } from 'react-icons/bs'
import { MdLyrics } from 'react-icons/md'
import { FaSoundcloud } from 'react-icons/fa'

export default function Music() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <Avatar src={image} size={150} />
        </div>
        <ActionList showDividers={true}>
          <ActionList.LinkItem
            as={Link}
            to={
              'https://open.spotify.com/track/7rXGDVMlkU27WjlWgcZbnc?si=a14bba72851b4552'
            }
          >
            <ActionList.LeadingVisual>
              <BsSpotify width="20" />
            </ActionList.LeadingVisual>
            "no time" in Spotify
          </ActionList.LinkItem>

          <ActionList.LinkItem
            as={Link}
            to={
              'https://music.apple.com/us/album/no-time/1557673169?i=1557673170'
            }
          >
            <ActionList.LeadingVisual>
              <BsApple width="20" />
            </ActionList.LeadingVisual>
            "no time" in Apple Music
          </ActionList.LinkItem>

          <ActionList.LinkItem as={Link} to={'https://youtu.be/VyVytZmtNmA'}>
            <ActionList.LeadingVisual>
              <BsYoutube width="20" />
            </ActionList.LeadingVisual>
            "no time" Official Music Video
          </ActionList.LinkItem>
          <ActionList.LinkItem as={Link} to={'https://soundcloud.com/camcanta'}>
            <ActionList.LeadingVisual>
              <FaSoundcloud width="20" sx={{}} />
            </ActionList.LeadingVisual>
            Demos and Covers
          </ActionList.LinkItem>
          <ActionList.LinkItem
            as={Link}
            to={'https://genius.com/Cam-martinez-no-time-lyrics'}
          >
            <ActionList.LeadingVisual>
              <MdLyrics width="20" sx={{}} />
            </ActionList.LeadingVisual>
            Lyrics in Genius
          </ActionList.LinkItem>
        </ActionList>
      </Box>
    </>
  )
}
