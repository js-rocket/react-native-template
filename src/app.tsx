import React from 'react'
import { useColorScheme } from 'react-native';
import { ThemeProvider } from "styled-components";

import MainNavigation from './navigation/main-navigation'
import { lightTheme, darkTheme } from './theme'

const App = () => {
  const colorScheme = useColorScheme();
  return <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
    <MainNavigation />
  </ThemeProvider>
}

export default App
