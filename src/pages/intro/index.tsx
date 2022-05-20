import React from 'react'
import {
  ImageBackground,
  SafeAreaView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import styled from 'styled-components/native'
import { NavigationProp } from '@react-navigation/native'

import { Button } from '../../components/elements'
import routes from '../../navigation/routes'

const PageWrapper = styled.View(() => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}))

const TitleText = styled.Text(({ theme }) => ({
  color: theme.colors.secondary,
  fontSize: 24,
  fontWeight: 'bold',
}))

const NormalTextWrapper = styled.View(() => ({
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingTop: 20,
  paddingHorizontal: 20,
}))

const NormalText = styled.Text(() => ({
  fontWeight: 'normal',
}))

const imagebackgroundStyle: StyleProp<ViewStyle> = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

export const IntroPage = ({
  navigation,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList, never>
}) => {
  const onPressNext = () => {
    navigation.navigate(routes[routes.Login] as never)
  }

  return (
    <PageWrapper>
      <ImageBackground
        style={imagebackgroundStyle}
        source={require('../../assets/png/clouds.png')}>
        <SafeAreaView style={{ alignItems: 'center' }}>
          <TitleText>App Introduction</TitleText>
          <NormalTextWrapper>
            <NormalText>
              This is a small react native template
              {'\n\n'}
              It uses uses the bare minimum number of external packages to
              create an application
              {'\n\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </NormalText>
          </NormalTextWrapper>
          <View style={{ paddingBottom: 15, paddingHorizontal: 20 }}>
            <Button title="OK" onPress={onPressNext} />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </PageWrapper>
  )
}
