import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { teal, deepOrange, cyan, orange } from '@mui/material/colors'
// Create a theme instance.
// Theme dong nhat moi layout theo mot dang nhat quan
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: '48px',
    boardBarHeight: '56px',
    buttonFontWeight: '600'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(19, 22, 24, 0.9)',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(19, 22, 24, 0.9)'
          }
        }
      }
    },
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px !important',
          '&:hover': { borderWidth: '1.55px !important' }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root:{
          // color: theme.palette.primary.main,
          fontSize: '0.875rem'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root:{
          // color: theme.palette.primary.main,
          height: '32px',
          fontSize: '0.875rem',
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1.8px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1.8px !important' }
        }
      }
    }
  }
})
console.log('🚀 ~ theme:', theme)

export default theme