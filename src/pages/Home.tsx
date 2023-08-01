import { BranchName, Box, Heading, Avatar, Link } from '@primer/react'
import image from '../assets/profile.png'
import { LinkIcon } from '@primer/octicons-react'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          m: 5,
          alignContent: 'center',
        }}
      >
        <Avatar src={image} size={200} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            m: 5,
          }}
        >
          <Heading>Hey, I'm Camila 👋</Heading>
          <Heading sx={{ fontSize: 4, mb: 3 }}>
            and I'm a Web Developer.
          </Heading>
          <Heading sx={{ fontSize: 2 }}>Currently 📍 Berlin</Heading>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'border.default',
          py: 3,
          px: 5,
        }}
      >
        <p>Technologies and programming languages:</p>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2',
            pb: 4,
          }}
        >
          <BranchName href="#">Javascript</BranchName>
          <BranchName href="#">Typescript</BranchName>
          <BranchName href="#">React</BranchName>
          <BranchName href="#">Express</BranchName>
          <BranchName href="#">Python</BranchName>
          <BranchName href="#">Flask</BranchName>
          <BranchName href="#">C#</BranchName>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          py: 6,
        }}
      >
        <Heading sx={{ fontSize: 4, my: 3 }}>
          Projects I'm currently working on:
        </Heading>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2',
            p: 5,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'border.default',
          }}
        >
          <Heading sx={{ fontSize: 2 }}> My portfolio</Heading>
          <Link
            href="https://github.com/cammarb/portfolio"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}
          >
            <LinkIcon />
            Repository
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2',
            }}
          >
            <BranchName href="#">Typescript</BranchName>
            <BranchName href="#">React + Vite</BranchName>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2',
            p: 5,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'border.default',
          }}
        >
          <Heading sx={{ fontSize: 2 }}>Defendly</Heading>
          <Link
            href="https://defendly.de/"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}
          >
            <LinkIcon />
            Landing Page
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2',
            }}
          >
            <BranchName href="#">Javascript</BranchName>
            <BranchName href="#">React + Vite</BranchName>
            <BranchName href="#">Express JS</BranchName>
          </Box>
        </Box>
        <Link href="/projects" sx={{ textAlign: 'center' }}>
          See more
        </Link>
      </Box>
    </>
  )
}
