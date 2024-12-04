import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import GradeIcon from '@mui/icons-material/Grade'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import Tooltip from '@mui/material/Tooltip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  height: '32px',
  fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&: hover': {
    backgroundColor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx ={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      paddingX: 2,
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      {/* Left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '32px' }}>
        <Chip
          sx={{
            color: 'primary.main',
            fontSize: '1.3rem',
            fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
            bgcolor: 'white',
            border: 'none',
            height: '32px',
            borderRadius: '4px',
            '&: hover': {
              backgroundColor: 'primary.50'
            }
          }}
          label="Name product"
          clickable/>

        <Tooltip title="Star or unstar this table. Starred tables will appear at the top of the Tables list." sx={{ backgroundColor: '#9FADBC', cursor: 'default' }}>
          <GradeIcon fontSize='small' sx={{ color: '#E2B203', cursor: 'pointer', width: '32px' }}/>
        </Tooltip>

        <Tooltip title="Viewablity">
          <Chip
            sx={MENU_STYLES}
            icon={<VpnLockIcon />}
            label="Public"
            clickable/>
        </Tooltip>
        <Tooltip title="Board">
          <Chip
            sx={{
              color: 'primary.main',
              backgroundColor: 'primary.50',
              border: 'none',
              height: '32px',
              fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
              paddingX: '5px',
              borderRadius: '4px',
              '& .MuiSvgIcon-root': {
                color: 'primary.main'
              },
              '&: hover': {
                backgroundColor: 'primary.100'
              }
            }}
            icon={<DashboardIcon />}
            label="Board"
            clickable/>
        </Tooltip>
        <Tooltip title='Customize view'>
          <KeyboardArrowDownIcon
            fontSize='medium'
            sx={{
              color: 'primary.main',
              height: '32px',
              width: '32px',
              cursor: 'pointer',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'primary.50'
              },
              '&: active': {
                backgroundColor: 'primary.50'
              }
            }}/>
        </Tooltip>
      </Box>

      {/* Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '32px' }}>
        <Tooltip title="Add to Google Drive">
          <Chip
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />}
            label="Add to Google Drive"
            clickable/>
        </Tooltip>
        <Tooltip title="Automation">
          <Chip
            sx={MENU_STYLES}
            icon={<BoltIcon />}
            label="Automation"
            clickable/>
        </Tooltip>
        <Tooltip title="Filter">
          <Chip
            sx={MENU_STYLES}
            icon={<FilterListIcon />}
            label="Filter"
            clickable/>
        </Tooltip>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: '32px' }}>
          <AvatarGroup
            max={4}
            total={7}
            sx={{
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                fontSize: 16
              }
            }}>
            <Tooltip title="HoangVanVu">
              <Avatar
                alt='HoangVanVu'
                src="https://lh3.googleusercontent.com/a/ACg8ocL8j_TiXwReyQNlRgnsT2bw5IDlgDuomEWx8REzAzxpGWnOnDw4=s96-c-rg-br100" />
            </Tooltip>
            <Tooltip title="HoangVanVu">
              <Avatar
                alt='HoangVanVu'
                src="https://lh3.googleusercontent.com/a/ACg8ocL8j_TiXwReyQNlRgnsT2bw5IDlgDuomEWx8REzAzxpGWnOnDw4=s96-c-rg-br100" />
            </Tooltip>
            <Tooltip title="HoangVanVu">
              <Avatar
                alt='HoangVanVu'
                src="https://lh3.googleusercontent.com/a/ACg8ocL8j_TiXwReyQNlRgnsT2bw5IDlgDuomEWx8REzAzxpGWnOnDw4=s96-c-rg-br100" />
            </Tooltip>
          </AvatarGroup>
          <Tooltip title="Share Board">
            <Button variant="outlined" startIcon={<PersonAddIcon />}>Share</Button>
          </Tooltip>
        </Box>
        <MoreHorizIcon
          sx={{
            color: 'primary.main',
            height: '32px',
            width: '32px',
            cursor: 'pointer',
            ml: '5px',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: 'primary.50'
            },
            '&: active': {
              backgroundColor: 'primary.50'
            }
          }}/>
      </Box>
    </Box>
  )
}

export default BoardBar
