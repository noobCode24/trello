import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
function Board() {
  return (
    //Dung container thay vi react fragments <></>
    //Trong Container có giá trị mặc định disableGutters -> tao khoang cach o hai ben (mac dinh la true nen se duoc tat neu them vao)
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board

