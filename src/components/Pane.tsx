import { FileIcon, UnmuteIcon } from '@primer/octicons-react'
import { Box, TreeView } from '@primer/react'
import { Link } from 'react-router-dom'
import { TypescriptPlain } from 'devicons-react'
import { useState } from 'react'

export default function Pane() {
  const [expanded, setExpanded] = useState<boolean>(true)
  return (
    <>
      <Box sx={{ maxWidth: 400 }}>
        <nav aria-label="Files">
          <TreeView aria-label="Files">
            <TreeView.Item
              id="src"
              expanded={expanded}
              onExpandedChange={setExpanded}
            >
              <TreeView.LeadingVisual>
                <TreeView.DirectoryIcon />
              </TreeView.LeadingVisual>
              src
              <TreeView.SubTree>
                <Link to={'projects'}>
                  <TreeView.Item id="projects">
                    <TreeView.LeadingVisual>
                      <TypescriptPlain />
                    </TreeView.LeadingVisual>
                    Projects.ts
                  </TreeView.Item>
                </Link>
                <Link to={'music'}>
                  <TreeView.Item id="music">
                    <TreeView.LeadingVisual>
                      <UnmuteIcon />
                    </TreeView.LeadingVisual>
                    Music.mp3
                  </TreeView.Item>
                </Link>
              </TreeView.SubTree>
            </TreeView.Item>
            <Link to={'/'}>
              <TreeView.Item id="index">
                <TreeView.LeadingVisual>
                  <TypescriptPlain />
                </TreeView.LeadingVisual>
                index.ts
              </TreeView.Item>
            </Link>
          </TreeView>
        </nav>
      </Box>
    </>
  )
}
