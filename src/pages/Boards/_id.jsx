import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import Box from '@mui/material/Box'
import backgroundImage from '~/assets/car.jpg'
import { mockData } from '~/apis/mock-data'
function Board() {
  return (
    //Dung container thay vi react fragments <></>
    //Trong Container có giá trị mặc định disableGutters -> tao khoang cach o hai ben (mac dinh la true nen se duoc tat neu them vao)
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      {/* Ảnh nền */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          filter: (theme) => (theme.palette.mode === 'dark' ? 'brightness(70%)' : 'none')
        }}
      />
      {/* Nội dung phía trên ảnh nền */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <AppBar />
        <BoardBar board={mockData?.board} /> {/*(optional Chaining) mockData ? mockData.board : undefined */}
        <BoardContent board={mockData?.board}/>
      </Box>
    </Container>
  )
}

export default Board

