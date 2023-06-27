import { FileIcon } from '@primer/octicons-react'
import { Box, CircleOcticon, TreeView } from '@primer/react'
import { Link } from 'react-router-dom'

export default function Pane() {
  return (
    <>
      <Box sx={{ maxWidth: 400 }}>
        <nav aria-label="Files">
          <TreeView aria-label="Files">
            <TreeView.Item id="src">
              <TreeView.LeadingVisual>
                <TreeView.DirectoryIcon />
              </TreeView.LeadingVisual>
              src
              <TreeView.SubTree>
                <TreeView.Item
                  id="src/Avatar.tsx"
                  onSelect={() => console.log('src/Avatar.tsx')}
                >
                  <TreeView.LeadingVisual>
                    <FileIcon />
                  </TreeView.LeadingVisual>
                  AboutMe.tsx
                </TreeView.Item>
                <TreeView.Item id="src/Button.tsx" current>
                  <TreeView.LeadingVisual>
                    <FileIcon />
                  </TreeView.LeadingVisual>
                  Projects.tsx
                </TreeView.Item>
              </TreeView.SubTree>
            </TreeView.Item>
            <Link to={'music'}>
              <TreeView.Item id="package.json">
                <TreeView.LeadingVisual>
                  <FileIcon />
                </TreeView.LeadingVisual>
                Music.mp3
              </TreeView.Item>
            </Link>
          </TreeView>
        </nav>
      </Box>
    </>
  )
}
