import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
// import trelloLogo from '~/assets/trello.svg'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import { ReactComponent as bellIcon } from '~/assets/bell.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Button from '@mui/material/Button'
import Sample from './Menus/Sample'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
function AppBar() {
  return (
    <Box sx ={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      paddingX: 2,
      alignItems: 'center', //can giua theo chieu doc
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto'
    }}>
      {/* left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: '32px' }}>
        <AppsIcon sx={{ color: 'primary.main', cursor: 'pointer' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
          <SvgIcon component={trelloIcon} fontSize='small' inheritViewBox sx={{ color: 'primary.main' }}/>
          <Typography component='span' sx={{ fontSize: '1.2rem', fontWeight: (theme) => theme.trelloCustom.buttonFontWeight, color: 'primary.main' }}>Trello</Typography>
        </Box>

        {/* Menus */}
        <Box sx={{ display: { xs: 'none', md: 'flex ' }, gap: 1 }}>
          {/* xs: 0px, md: 900px -> tuong tu nhu reponsive duoi 900 se bi mat di tren 900 se duoc hien thi*/}
          <Workspaces />
          <Recent />
          <Starred />
          <Sample />
          <Button variant="contained" sx={{ height: '32px' }}>Create new</Button>
        </Box>
      </Box>

      {/* Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: '32px' }}>
        <TextField id="outlined-search" label="Search..." type="search" size='small' sx={{ minWidth: '120px' }}/>
        <ModeSelect />

        {/* Notifications */}
        <Tooltip title="Notifications">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <SvgIcon component={bellIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          </Badge>
        </Tooltip>

        {/* Help */}
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: 'primary.main', cursor: 'pointer' }}/>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
