import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: 1.5,
        paddingX: 1.75,
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollbarWidth: '5px',
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'rgba(143, 142, 137)'
        }
      }}
    >
      <Column />
      <Column />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '272px',
          height: (theme) => theme.trelloCustom.columnHeaderHeight,
          padding: '12px',
          borderRadius: '12px',
          backgroundColor: '#ffffff3d',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.36)'
          },
          '& .MuiButtonBase-root': {
            '&: hover':{
              bgcolor: 'transparent'
            }
          }
        }}
      >
        <Button
          variant='text'
          startIcon={<AddIcon />}
          sx={{
            bgcolor: 'transparent',
            fontSize: '14px',
            color:'#FFFFFF',
            fontWeight: 'bold'
          }}
        >
          Add new Column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
