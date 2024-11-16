import './App.css'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {
  return (
    <>
      <ModeToggle />
      <div>
        <Button variant="contained">Hello world</Button>
      </div>
      <Typography variant="body2" color="text.secondary">af</Typography>
      <AccessAlarmIcon color='primary'/>
      <ThreeDRotation color='warning' />
    </>
  )
}

export default App
