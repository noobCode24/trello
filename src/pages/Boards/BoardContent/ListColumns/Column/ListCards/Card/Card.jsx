import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import { ReactComponent as ViewIcon } from '~/assets/view.svg'
import { ReactComponent as DescriptionIcon } from '~/assets/description.svg'
import { ReactComponent as LinkIcon } from '~/assets/link.svg'
// import { ReactComponent as EditCardIcon } from '~/assets/editCard.svg'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard>
        <CardContent>
          <Typography>Huddle Template :: [Presenter(s)] - [Project]</Typography>
          <Box sx={{ margin: '0px 0px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box>
              <Tooltip title="You are following this tag.">
                <Chip
                  fontSize='small'
                  sx={{
                    bgcolor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    width: '24px',
                    mr: '4px',
                    height: '24px',
                    '&: hover': {
                      backgroundColor: 'none'
                    },
                    '& .MuiChip-icon': {
                      color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                      marginX: 0,
                      width: '16px',
                      height: '16px'
                    },
                    '& .MuiButtonBase-root': {
                      bgcolor: 'transparent'
                    },
                    '& .MuiChip-label': {
                      paddingX: 0
                    }
                  }}
                  icon= {<ViewIcon/>}
                />
              </Tooltip>
              <Tooltip title="The card already has a description">
                <Chip
                  fontSize='small'
                  sx={{
                    bgcolor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    width: '24px',
                    mr: '4px',
                    height: '24px',
                    '&: hover': {
                      backgroundColor: 'none'
                    },
                    '& .MuiChip-icon': {
                      color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                      marginX: 0,
                      width: '16px',
                      height: '16px'
                    },
                    '& .MuiButtonBase-root': {
                      bgcolor: 'transparent'
                    },
                    '& .MuiChip-label': {
                      paddingX: 0
                    }
                  }}
                  icon= {<DescriptionIcon />}
                />
              </Tooltip>
              <Tooltip title="Attachments">
                <Chip
                  fontSize='small'
                  sx={{
                    bgcolor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2px',
                    color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                    width: 'auto',
                    height: '24px',
                    '&: hover': {
                      backgroundColor: 'none'
                    },
                    '& .MuiChip-icon': {
                      color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                      marginX: 0,
                      width: '16px',
                      height: '16px'
                    },
                    '& .MuiButtonBase-root': {
                      bgcolor: 'transparent'
                    },
                    '& .MuiChip-label': {
                      marginLeft: '2px',
                      paddingX: 0,
                      fontSize: '12px'
                    }
                  }}
                  icon= {<LinkIcon />}
                  label = '3'
                />
              </Tooltip>
            </Box>
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
                  gap: '12px',
                  '& .MuiAvatar-root': {
                    width: 24,
                    height: 24,
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
              </AvatarGroup>
            </Box>
          </Box>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard>
      <CardMedia
        image="src/assets/car.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography>Huddle Template :: [Presenter(s)] - [Project]</Typography>
        <Box sx={{ margin: '0px 0px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Tooltip title="You are following this tag.">
              <Chip
                fontSize='small'
                sx={{
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  width: '24px',
                  mr: '4px',
                  height: '24px',
                  '&: hover': {
                    backgroundColor: 'none'
                  },
                  '& .MuiChip-icon': {
                    color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                    marginX: 0,
                    width: '16px',
                    height: '16px'
                  },
                  '& .MuiButtonBase-root': {
                    bgcolor: 'transparent'
                  },
                  '& .MuiChip-label': {
                    paddingX: 0
                  }
                }}
                icon= {<ViewIcon/>}
              />
            </Tooltip>
            <Tooltip title="The card already has a description">
              <Chip
                fontSize='small'
                sx={{
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  width: '24px',
                  mr: '4px',
                  height: '24px',
                  '&: hover': {
                    backgroundColor: 'none'
                  },
                  '& .MuiChip-icon': {
                    color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                    marginX: 0,
                    width: '16px',
                    height: '16px'
                  },
                  '& .MuiButtonBase-root': {
                    bgcolor: 'transparent'
                  },
                  '& .MuiChip-label': {
                    paddingX: 0
                  }
                }}
                icon= {<DescriptionIcon />}
              />
            </Tooltip>
            <Tooltip title="Attachments">
              <Chip
                fontSize='small'
                sx={{
                  bgcolor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                  width: 'auto',
                  height: '24px',
                  '&: hover': {
                    backgroundColor: 'none'
                  },
                  '& .MuiChip-icon': {
                    color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
                    marginX: 0,
                    width: '16px',
                    height: '16px'
                  },
                  '& .MuiButtonBase-root': {
                    bgcolor: 'transparent'
                  },
                  '& .MuiChip-label': {
                    marginLeft: '2px',
                    paddingX: 0,
                    fontSize: '12px'
                  }
                }}
                icon= {<LinkIcon />}
                label = '3'
              />
            </Tooltip>
          </Box>
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
                gap: '12px',
                '& .MuiAvatar-root': {
                  width: 24,
                  height: 24,
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
            </AvatarGroup>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  )
}

export default Card
