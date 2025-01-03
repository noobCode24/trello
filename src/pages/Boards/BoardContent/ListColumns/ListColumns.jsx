import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  /*
  Thằng SortableContext yêu cầu items là một dạng mảng ['id-1', 'id-2', 'id-3'] chứ không phải là [{id: id-1, id: id-2, id: id-3}]
  Nếu không đúng thì vẫn kéo thả được nhưng không có animations
  https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
  */
  return (
    <SortableContext items={ columns?.map(c => c._id) } strategy={horizontalListSortingStrategy}>
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
        {columns?.map(column => <Column key={column._id} column={column} />)}

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
    </SortableContext>
  )
}

export default ListColumns
