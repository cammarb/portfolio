import { LinkIcon } from '@primer/octicons-react'
import { Box, BranchName, Heading, Link } from '@primer/react'

export const Projects = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3',
        }}
      >
        <Heading sx={{ my: 3 }}>My projects</Heading>
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
            Live Website
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
          <Heading sx={{ fontSize: 2 }}>VS Code Shortcuts</Heading>
          <Link
            href="https://github.com/cammarb/VSCodeShortcuts.git"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}
          >
            <LinkIcon />
            Repository
          </Link>
          <Link
            href="https://vscodeshortcuts.pages.dev/"
            sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}
          >
            <LinkIcon />
            Live Website
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
      </Box>
    </>
  )
}
