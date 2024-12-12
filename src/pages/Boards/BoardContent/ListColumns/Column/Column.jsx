import Box from '@mui/material/Box'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import ContentCut from '@mui/icons-material/ContentCut'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import Cloud from '@mui/icons-material/Cloud'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import Chip from '@mui/material/Chip'
import { ReactComponent as OptimizeIcon } from '~/assets/optimize.svg'
import { ReactComponent as TemplateIcon } from '~/assets/template.svg'
// import { ReactComponent as EditCardIcon } from '~/assets/editCard.svg'
import { Button } from '@mui/material'
import ListCards from './ListCards/ListCards'

const COLUMN_COLORS_MODE = (theme) => theme.palette.mode === 'dark' ? '#101204' : '#F1F2F4'

function Column() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const [anchorElOptimize, setAnchorElOptimize] = useState(null)
  const [anchorElManipulate, setAnchorElManipulate] = useState(null)

  const openOptimize = Boolean(anchorElOptimize)
  const openManipulate = Boolean(anchorElManipulate)

  const handleClickOptimize = (event) => setAnchorElOptimize(event.currentTarget)
  const handleCloseOptimize = () => setAnchorElOptimize(null)

  const handleClickManipulate = (event) => setAnchorElManipulate(event.currentTarget)
  const handleCloseManipulate = () => setAnchorElManipulate(null)

  return (
    <Box sx={{
      minWidth: '272px',
      maxWidth: '272px',
      bgcolor: (theme) => COLUMN_COLORS_MODE(theme),
      borderRadius: '12px',
      height: 'fit-content',
      maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${theme.spacing(4)})`
    }}>
      {/* Header */}
      <Box sx={{
        height: (theme) => theme.trelloCustom.columnHeaderHeight,
        p: '8px 8px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
      }}>
        <Typography
          sx={{
            color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
            padding: '6px 8px 6px 12px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer',
            lineHeight: '20px'
          }}
        >
          Column title
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 0.25
          }}
        >
          <Box>
            <Chip
              id="basic-column-dropdown__optimizeIcon"
              aria-controls={openOptimize ? 'basic-menu-optimizeIcon' : undefined}
              aria-haspopup="true"
              aria-expanded={openOptimize ? 'true' : undefined}
              fontSize='small'
              onClick={handleClickOptimize}
              sx={{
                bgcolor: 'transparent',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '5px',
                '&: hover': {
                  backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgba(255, 255, 255, 0.2)': '#D0D4DB'
                },
                '& .MuiChip-label': {
                  paddingX: 0
                },
                '& .MuiChip-icon': {
                  color: (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#626f86',
                  marginX: 0
                }
              }}
              icon= {<OptimizeIcon/>}
              clickable
            />
            <Menu
              id="basic-menu-optimizeIcon"
              anchorEl={anchorElOptimize}
              open={openOptimize}
              onClose={handleCloseOptimize}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown__optimizeIcon'
              }}
              PaperProps={{
                sx: {
                  mt: '9px',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(73, 74, 76) 0px 0px 0px 1.2px' : 'rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(236, 236, 236) 0px 0px 0px 1.2px',
                  borderRadius: 2,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '#282E33' : '#FFFFFF',
                  color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#172b4d',
                  width: 300,
                  backgroundImage: 'none',
                  '& .MuiList-root': {
                    padding: 0
                  }
                }
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  ⌘X
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" /></ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            <Tooltip title="Manipulate">
              <Chip
                id="basic-column-dropdown__manipulate"
                aria-controls={openManipulate ? 'basic-menu-manipulate' : undefined}
                aria-haspopup="true"
                aria-expanded={openManipulate ? 'true' : undefined}
                onClick={handleClickManipulate}
                sx={{
                  bgcolor: openManipulate ? ((theme) => theme.palette.mode == 'dark' ? 'rgba(182, 194, 207)' : 'rgba(44, 62, 93)') : 'transparent',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '7px',
                  '&: hover': {
                    backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgba(255, 255, 255, 0.2)': '#D0D4DB'
                  },
                  '&: active': {
                    backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#414A48': '#A9B0BC'
                  },
                  '& .MuiChip-label': {
                    paddingX: 0
                  },
                  '& .MuiChip-icon': {
                    color: openManipulate ? (theme) => theme.palette.mode === 'dark' ? '#101204' : '#FFFFFF' : (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#626f86',
                    marginX: 0,
                    fontSize: '19px'
                  }
                }}
                icon= {<MoreHorizIcon />}
                clickable
              />
            </Tooltip>
            <Menu
              id="basic-menu-manipulate"
              anchorEl={anchorElManipulate}
              open={openManipulate}
              onClose={handleCloseManipulate}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown__manipulate'
              }}
              PaperProps={{
                sx: {
                  mt: '9px',
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(73, 74, 76) 0px 0px 0px 1.2px' : 'rgba(0, 0, 0, 0.16) 0px 1px 1px, rgb(236, 236, 236) 0px 0px 0px 1.2px',
                  borderRadius: 2,
                  bgcolor: (theme) => theme.palette.mode === 'dark' ? '#282E33' : '#FFFFFF',
                  color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#172b4d',
                  width: 300,
                  backgroundImage: 'none',
                  '& .MuiList-root': {
                    padding: 0
                  }
                }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px 8px'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '40px',
                    fontSize: '14px',
                    paddingLeft: '32px'
                  }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      fontWeight: '600',
                      color: (theme) => (theme.palette.mode === 'dark' ? '#9FADBC' : '#44546f')
                    }}
                  >
                    Manipulate
                  </Box>
                </Box>
                <Chip
                  onClick={handleCloseManipulate}
                  sx={{
                    bgcolor: 'transparent',
                    border: 'none',
                    width: '32px',
                    height: '31px',
                    borderRadius: '7px',
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgba(255, 255, 255, 0.2)': '#D0D4DB'
                    },
                    '& .MuiChip-label': {
                      paddingX: 0
                    },
                    '& .MuiChip-icon': {
                      color: (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#44546F',
                      marginX: 0,
                      fontSize: '16px'
                    }
                  }}
                  icon={<CloseIcon />}
                  clickable
                />
              </Box>
              <Box
                sx={{
                  '& .MuiMenuItem-root': {
                    padding: '6px 12px'
                  },
                  '& .MuiMenuItem-root .MuiTypography-root': {
                    fontSize: '14px'
                  },
                  '& .MuiDivider-root': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '8px auto',
                    width: '92%',
                    padding: '0 12px'
                  }
                }}>
                <Box>
                  <MenuItem>
                    <ListItemText>Add a card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Copy a list</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Move the list</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Move all the cards in this list</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Sort by...</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemText>Track</ListItemText>
                  </MenuItem>
                  <Divider />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 12px'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '13px',
                        color: (theme) => (theme.palette.mode === 'dark' ? '#9FADBC' : '#44546f'),
                        '&:hover': {
                          color: (theme) => (theme.palette.mode === 'dark' ? '#B6C2CF' : '#172b4d')
                        }
                      }}
                      onClick={handleToggleMenu}
                    >
                        Automation
                      <Chip
                        sx={{
                          bgcolor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          height: '20px',
                          '& .MuiChip-label': {
                            paddingX: 0
                          },
                          '& .MuiChip-icon': {
                            color: (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#44546F',
                            marginX: 0,
                            fontSize: '20px',
                            '&: hover':{ color: (theme) => (theme.palette.mode === 'dark' ? '#B6C2CF' : '#172b4d') }
                          },
                          '& .MuiButtonBase-root': {
                            bgcolor: 'transparent'
                          },
                          '&: hover': {
                            bgcolor: 'transparent'
                          }
                        }}
                        icon={isMenuOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      />
                    </Box>
                  </Box>
                </Box>
                {isMenuOpen && (
                  <Box>
                    <MenuItem>
                      <ListItemText>When you add a tag to your list...</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemText>On a daily basis, sort the list by...</ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemText>Every Monday, sort the list by...</ListItemText>
                    </MenuItem>
                    <MenuItem
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      Create a rule
                      <Chip
                        sx={{
                          bgcolor: 'transparent',
                          border: 'none',
                          height: '21px',
                          cursor: 'pointer',
                          '& .MuiChip-label': {
                            paddingX: 0
                          },
                          '& .MuiChip-icon': {
                            color: (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#44546F',
                            marginX: 0,
                            fontSize: '17px'
                          },
                          '& .MuiButtonBase-root': {
                            bgcolor: 'transparent'
                          },
                          '&: hover': {
                            bgcolor: 'transparent'
                          }
                        }}
                        icon={<NorthEastIcon />}
                      />
                    </MenuItem>
                  </Box>
                )}
                <Divider />
                <MenuItem>
                  <ListItemText>Archive this list</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText>Store all the tags in this list</ListItemText>
                </MenuItem>
              </Box>
            </Menu>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: '8px',
          mb: '-2px'
        }}
      />

      {/* List Card */}
      <ListCards />

      {/* Footer */}
      <Box sx={{
        height: (theme) => theme.trelloCustom.columnFooterHeight,
        p: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        gap: 0.5
      }}>
        <Button
          sx={{
            bgcolor: 'transparent',
            border: 'none',
            padding: '6px 12px 6px 8px',
            color: (theme) => theme.palette.mode === 'dark'? '#9FADBC' : '#44546F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '90%',
            height: '32px',
            fontWeight: '600',
            borderRadius: '7px',
            '&: hover': {
              backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgba(255, 255, 255, 0.2)': '#D0D4DB',
              color: (theme) => theme.palette.mode == 'dark' ? '#B6C2CF': '#172B4D'
            },
            '&: active': {
              backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#414A48': '#A9B0BC'
            },
            '& .MuiButton-startIcon': {
              color: (theme) => theme.palette.mode === 'dark'? '#9FADBC' : '#44546F',
              '&: hover':{
                color: (theme) => theme.palette.mode == 'dark' ? '#B6C2CF': '#172B4D'
              }
            }
          }}
          startIcon={<AddIcon />}
        >
          Add a card
        </Button>
        <Tooltip title="Created from templates">
          <Chip
            sx={{
              bgcolor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '7px',
              '&: hover': {
                backgroundColor: (theme) => theme.palette.mode == 'dark' ? 'rgba(255, 255, 255, 0.2)': '#D0D4DB',
                color: (theme) => theme.palette.mode == 'dark' ? '#B6C2CF': '#172B4D'
              },
              '&: active': {
                backgroundColor: (theme) => theme.palette.mode == 'dark' ? '#414A48': '#A9B0BC'
              },
              '& .MuiChip-label': {
                paddingX: 0
              },
              '& .MuiChip-icon': {
                color: (theme) => theme.palette.mode === 'dark' ? '#9FADBC' : '#626f86',
                marginX: 0,
                width: '17px',
                height: '17px'
              }
            }}
            icon={<TemplateIcon />}
            clickable
          />
        </Tooltip>
      </Box>
    </Box>
  )
}

export default Column
