import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
// import trelloLogo from '~/assets/trello.svg'
import { ReactComponent as trelloIcon } from '~/assets/trello.svg'
import { ReactComponent as bellIcon } from '~/assets/bell.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Recent from './Menus/Recent'
import Chip from '@mui/material/Chip'
import Starred from './Menus/Starred'
import Button from '@mui/material/Button'
import Sample from './Menus/Sample'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const TEXT_COLORS_MODE = (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#FFFFFF'

function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx ={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      paddingX: 2,
      alignItems: 'center', //can giua theo chieu doc
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1D2125': '#272727'),
      borderBottom: '0.5px solid #505051'
    }}>
      {/* left */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, height: '32px' }}>
        <AppsIcon sx={{ color: (theme) => TEXT_COLORS_MODE(theme), cursor: 'pointer' }}/>
        <Chip
          sx={{
            bgcolor: 'transparent',
            border: 'none',
            height: '32px',
            borderRadius: '4px',
            '&: hover': {
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#A6C5E229': 'rgba(255, 255, 255, 0.20)'
            }
          }}
          label = {
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon component={trelloIcon} fontSize='small' inheritViewBox sx={{ color: (theme) => TEXT_COLORS_MODE(theme) }}/>
              <Typography component='span' sx={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', fontWeight: (theme) => theme.trelloCustom.buttonFontWeight, color: (theme) => TEXT_COLORS_MODE(theme) }}>Trello</Typography>
            </Box>
          }
          clickable
        />

        {/* Menus */}
        <Box sx={{ display: { xs: 'none', md: 'flex ' }, gap: 1 }}>
          {/* xs: 0px, md: 900px -> tuong tu nhu reponsive duoi 900 se bi mat di tren 900 se duoc hien thi*/}
          <Workspaces />
          <Recent />
          <Starred />
          <Sample />
          <Button
            variant="contained"
            sx={{
              bgcolor: (theme) => theme.palette.mode === 'dark' ? '#409CFF' : '#525252',
              fontSize: '0.85rem',
              border: 'none',
              height: '32px',
              color: (theme) => theme.palette.mode === 'dark' ? '#1D2125' : '#FFFFFF',
              fontWeight: '550',
              '&: hover': {
                bgcolor: (theme) => theme.palette.mode === 'dark' ? '#85B8FF' : '#757575',
                border: 'none'
              }
            }}>
              Create new
          </Button>
        </Box>
      </Box>

      {/* Right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, height: '32px' }}>
        <TextField
          id="outlined-search"
          label="Search..."
          type="text"
          size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{ // giong voi sx
            startAdornment: ( // icon search o dau
              <InputAdornment position="start">
                <SearchIcon sx={{ color: (theme) => TEXT_COLORS_MODE(theme) }}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{ color: searchValue ? (theme) => TEXT_COLORS_MODE(theme) : 'transparent', cursor: searchValue ? 'pointer' : 'text' }}
                onClick={() => setSearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: (theme) => TEXT_COLORS_MODE(theme) },
            '& input': { color: (theme) => TEXT_COLORS_MODE(theme) },
            '& label.Mui-focused': { color: (theme) => TEXT_COLORS_MODE(theme) },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: (theme) => TEXT_COLORS_MODE(theme) },
              '&:hover fieldset': { borderColor: (theme) => TEXT_COLORS_MODE(theme) },
              '&.Mui-focused fieldset': { borderColor: (theme) => TEXT_COLORS_MODE(theme) }
            }
          }}
        />

        <ModeSelect />

        {/* Notifications */}
        <Tooltip title="Notifications">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <SvgIcon component={bellIcon} inheritViewBox sx={{ color: (theme) => TEXT_COLORS_MODE(theme) }} />
          </Badge>
        </Tooltip>

        {/* Help */}
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: (theme) => TEXT_COLORS_MODE(theme), cursor: 'pointer' }}/>
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
