// A dummy page that simply shows the name of the current route and a button to go to another route

import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'
import styled from 'styled-components/native'

import routes from '../../navigation/routes'
import { Button } from '../../components/button'
import { readString } from '../../utils/storage'
import { StorageKeys } from '../../constants'
import { ThemeType } from '../../theme'

const PageContainer = styled.View(({ theme }: { theme: ThemeType }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
}))

export const HomePage = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList, never>
  route: RouteProp<ParamListBase, string>
}) => {
  const [email, setEmail] = useState('')
  const nextRoute = !route.params
    ? routes.Help
    : (route.params as { nextScreen: routes }).nextScreen

  const nextRouteName = routes[nextRoute]
  console.log('Next Screen: ', nextRouteName)

  const getEmail = async () => {
    const userEmail = await readString(StorageKeys.USER_EMAIL, '')
    setEmail(userEmail)
  }

  useEffect(() => {
    getEmail()
  }, [])

  return (
    <PageContainer>
      <Text>{route.name}</Text>
      {!!email && <Text>{`Logged in user:\n${email}`}</Text>}
      <View style={{ paddingHorizontal: 60 }}>
        <Button
          title={`Go ${nextRouteName}`}
          onPress={() => navigation.navigate(nextRouteName as never)}
        />
      </View>
    </PageContainer>
  )
}
