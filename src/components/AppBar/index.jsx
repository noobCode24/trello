import Box from '@mui/material/Box'
import ModeSelect from '../../components/ModeSelect'
function AppBar() {
  return (
    <Box sx ={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center' //can giua theo chieu doc
    }}>
      <ModeSelect />
    </Box>
  )
}

export default AppBar
