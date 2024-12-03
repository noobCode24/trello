import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
// Create a theme instance.
// Theme dong nhat moi layout theo mot dang nhat quan
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '48px',
    boardBarHeight: '56px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      },
      spacing: (factor) => `${0.25 * factor}rem` //dieu chinh gap mac dinh thanh 0.25 rem
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange
      },
      spacing: (factor) => `${0.25 * factor}rem` //dieu chinh gap mac dinh thanh 0.25
    }
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none'
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          height: '32px',
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.light
          },
          '&: hover': {
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': { //ngan chan viec border khi ma click vao nut searc hay mode se hien thi dam hon so voi binh thuong
            borderWidth: '1px !important'
          }
        })
      }
    }
  }
})
console.log('🚀 ~ theme:', theme)

export default theme