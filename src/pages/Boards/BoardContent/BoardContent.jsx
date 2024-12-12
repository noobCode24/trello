import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'

function BoardContent() {
  return (
    <Box sx ={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      p: '12px 0 10px 0'
    }}>
      <ListColumns />
    </Box>
  )
}

export default BoardContent
