import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'

import MainNavigation from './navigation/main-navigation'
import { lightTheme, darkTheme } from './theme'
import { SplashPage } from './pages/splash'

//  Show the splash page before anything else begins
const App = () => {
  const [isReady, setIsReady] = useState(false)
  const colorScheme = useColorScheme()

  useEffect(() => {
    setIsReady(false)
    setTimeout(() => {
      // Do your startup stuff here, then setIsReady to true when you want to stop showing your splashscreen
      setIsReady(true)
    }, 4000)
  }, [])

  return !isReady ? (
    <SplashPage />
  ) : (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <MainNavigation />
    </ThemeProvider>
  )
}

export default App
