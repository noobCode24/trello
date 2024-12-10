import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import GradeIcon from '@mui/icons-material/Grade'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import Tooltip from '@mui/material/Tooltip'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ReactComponent as PresentationIcon } from '~/assets/presentation.svg'
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
    backgroundColor: 'rgba(255, 255, 255, 0.20)'
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
      paddingX: 0.7,
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#0000003d' : '#0000003d')
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
              backgroundColor: 'rgba(255, 255, 255, 0.20)'
            }
          }}
          label="Name product"
          clickable/>

        <Tooltip title="Star or unstar this table. Starred tables will appear at the top of the Tables list." sx={{ cursor: 'default' }}>
          <Chip
            sx={{
              bgcolor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              '&: hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.20)'
              },
              '& .MuiChip-label': {
                paddingX: 0
              }
            }}
            label = {
              <GradeIcon
                fontSize='small'
                sx={{
                  width: '17px',
                  height: '17px',
                  bgcolor: 'none',
                  color: '#E2B203',
                  display: 'flex',
                  alignItems: 'center'
                }}
              />
            }
            clickable
          />
        </Tooltip>

        <Tooltip title="Viewablity">
          <Chip
            sx={MENU_STYLES}
            icon={<VpnLockIcon sx={{ width: '20px', height: '20px', mb: '3px' }}/>}
            label="Public"
            clickable/>
        </Tooltip>
        <Tooltip title="Board">
          <Chip
            sx={{
              color: '#2E2F30',
              backgroundColor: '#E2E2E2',
              border: 'none',
              height: '32px',
              fontWeight: (theme) => theme.trelloCustom.buttonFontWeight,
              paddingX: '5px',
              borderRadius: '4px',
              '& .MuiChip-icon': {
                color: '#2E2F30',
                mb: '2px'
              },
              '&: hover': {
                backgroundColor: '#FFFFFF'
              }
            }}
            icon={<PresentationIcon />}
            label="Board"
            clickable/>
        </Tooltip>
        <Tooltip title='Customize view'>
          <Chip
            sx={{
              bgcolor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '4px',
              '&: hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.20)'
              },
              '& .MuiChip-label': {
                paddingX: 0
              }
            }}
            label= {<KeyboardArrowDownIcon
              sx={{
                color: (theme) => TEXT_COLORS_MODE(theme),
                display: 'flex',
                alignItems: 'center'
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
          bgcolor: (theme) => theme.palette.mode === 'dark' ? '#505051' : '#AAAAAA',
          width: '1.24px',
          height: '50%',
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
                width: 28,
                height: 28,
                fontSize: 14,
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                '&:first-of-type': {
                  bgcolor: '#9DA3A9'
                }
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
                height: '32px',
                borderColor: (theme) => TEXT_COLORS_MODE(theme),
                '&:hover': { borderColor: (theme) => TEXT_COLORS_MODE(theme) }
              }}
            >
              Share
            </Button>
          </Tooltip>
        </Box>
        <Chip
          sx={{
            bgcolor: 'transparent',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            '&: hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.20)'
            },
            '& .MuiChip-label': {
              paddingX: 0
            }
          }}
          label = {
            <MoreHorizIcon
              sx={{
                color: (theme) => TEXT_COLORS_MODE(theme),
                display: 'flex',
                alignItems: 'center'
              }}
            />
          }
          clickable
        />
      </Box>
    </Box>
  )
}

export default BoardBar
