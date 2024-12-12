import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
      padding: '2.5px 4px',
      margin: '0 4px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
        ${theme.trelloCustom.boardContentHeight} - 
        ${theme.spacing(5)} - 
        ${theme.trelloCustom.columnHeaderHeight} -
        ${theme.trelloCustom.columnFooterHeight} - 8px
      )`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(50, 59, 54)' : 'rgba(196, 201, 210)'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(50, 59, 54)' : 'rgba(196, 201, 210)'
      },
      '& .MuiPaper-root': {
        position: 'relative',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.3) 0.5px 1px 1.2px',
        borderRadius: '8px',
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#22272B' : '#FFFFFF',
        backgroundImage: 'none',
        overflow: 'unset',
        '&:hover': {
          boxShadow: (theme) => theme.palette.mode === 'dark' ? 'rgb(255, 255, 255) 0px 0px 0px 2.5px' : 'rgb(56, 139, 255) 0px 0px 0px 2.5px'
        }
      },
      '& .MuiCardContent-root': {
        minHeight: '24px',
        padding: '8px 12px 4px !important'
      },
      '& .MuiCardMedia-root': {
        backgroundColor: 'rgb(56, 60, 55)', // chinh sua theo hinh anh
        height: '166.067px', // chinh sua theo hinh anh
        maxHeight: '188px', // chinh sua theo hinh anh
        backgroundSize: 'cover', // chinh sua theo hinh anh
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        userSelect: 'none'
      },
      '& .MuiTypography-root': {
        color: (theme) => theme.palette.mode === 'dark' ? '#B6C2CF' : '#44546F',
        textDecoration: 'none',
        marginBottom: '4px',
        fontSize: '14px',
        fontWeight: '500'
      }
    }}
    >
      <Card />
      <Card temporaryHideMedia />
    </Box>
  )
}

export default ListCards
