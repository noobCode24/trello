import './App.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

function App() {
  return (
    <>
      <div>
        <Button variant="contained">Hello world</Button>
      </div>

      <AccessAlarmIcon color='primary'/>
      <ThreeDRotation color='warning' />
    </>
  )
}

export default App
