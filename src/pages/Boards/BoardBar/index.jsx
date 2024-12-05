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
  color: (theme) => TEXT_COLORS_MODE(theme),
  bgcolor: 'transparent',
  border: 'none',
  height: '32px',
  fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: (theme) => TEXT_COLORS_MODE(theme)
  },
  '&: hover': {
    backgroundColor: 'primary.50'
  }
}

const TEXT_COLORS_MODE = (theme) => theme.palette.mode === 'dark' ? '#FFFFFF' : '#FFFFFF'

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
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'rgba(19, 22, 24, 0.9)' : 'rgba(19, 22, 24, 0.9)'),
      borderBottom: '0.5px solid #505051'
    }}>
      {/* Left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '32px' }}>
        <Chip
          sx={{
            color: (theme) => TEXT_COLORS_MODE(theme),
            fontSize: '1.3rem',
            fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
            bgcolor: 'transparent',
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
          <Chip
            sx={{
              bgcolor: 'transparent',
              border: 'none',
              height: '32px',
              borderRadius: '4px',
              '&: hover': {
                backgroundColor: 'primary.50'
              }
            }}
            label = { <GradeIcon fontSize='small' sx={{ color: '#E2B203', display: 'flex', alignItems: 'center' }}/> }
            clickable
          />
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
              color: '#131618',
              backgroundColor: '#E2E2E2',
              border: 'none',
              height: '32px',
              fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
              paddingX: '5px',
              borderRadius: '4px',
              '& .MuiSvgIcon-root': {
                color: '#131618'
              },
              '&: hover': {
                backgroundColor: '#FFFFFF'
              }
            }}
            icon={<DashboardIcon />}
            label="Board"
            clickable/>
        </Tooltip>
        <Tooltip title='Customize view'>
          <Chip
            sx={{
              bgcolor: 'transparent',
              border: 'none',
              height: '32px',
              borderRadius: '4px',
              '&: hover': {
                backgroundColor: 'primary.50'
              }
            }}
            label= {<KeyboardArrowDownIcon
              fontSize='medium'
              sx={{
                color: (theme) => TEXT_COLORS_MODE(theme),
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  backgroundColor: 'primary.50'
                },
                '&: active': {
                  backgroundColor: 'primary.50'
                }
              }}/>}
            clickable
          />
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

        <Box sx={{
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#505051' : '#FFFFFF',
          width: '1.24px',
          height: '58%',
          mr: '6px',
          ml: '-3px'
        }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: '32px' }}>
          <AvatarGroup
            max={4}
            total={7}
            sx={{
              gap: '2px',
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                fontSize: 16,
                border: 'none'
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
            <Button
              variant="outlined"
              startIcon={<PersonAddIcon />}
              sx={{
                color: (theme) => TEXT_COLORS_MODE(theme),
                borderColor: (theme) => TEXT_COLORS_MODE(theme),
                '&:hover': { borderColor: (theme) => TEXT_COLORS_MODE(theme) }
              }}
            >
              Share
            </Button>
          </Tooltip>
        </Box>
        <MoreHorizIcon
          sx={{
            color: (theme) => TEXT_COLORS_MODE(theme),
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
