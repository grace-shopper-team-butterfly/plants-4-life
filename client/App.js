import React from 'react'

import Navbar from './components/Navbar'
import Routes from './Routes'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      light: '#0066ff',
      main: '#42a5f5',
      contrastText: '#ffcc00',
    },
  typography: {
    fontFamily: 'Quiksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  spacing: 8,
  Media: {
    height: '100%',
    width: '100%',
    objectFit: 'cover'
  }
}})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Navbar />
      <Routes />
    </div>
    </ThemeProvider>
  )
}

export default App
