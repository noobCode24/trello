
import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx ={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(19, 22, 24, 0.9)' : 'rgba(26, 26, 26, 0.9)'),
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent
