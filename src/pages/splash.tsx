import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import * as Svgimages from '../components/svgimages'
import { SPLASH_BACKGROUND_COLOR } from '../constants'

const SplashPageWrapper = styled.View(() => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  backgroundColor: SPLASH_BACKGROUND_COLOR,
}))

export const SplashPage = () => {
  const [splashQuote, setSplashQuote] = useState('Patience is a virtue ...')

  useEffect(() => {
    setTimeout(() => setSplashQuote('But not for this app'), 2000)
  }, [])

  return (
    <SplashPageWrapper>
      <Svgimages.Tux fill="black" width={100} height={100} />
      <Text style={{ color: 'black', fontSize: 24 }}>{splashQuote}</Text>
    </SplashPageWrapper>
  )
}
