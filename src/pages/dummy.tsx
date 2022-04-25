// A dummy page that simply shows the name of the current route and a button to go to another route

import React from 'react'
import { Text, View } from 'react-native'
import {
  RouteProp,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native'
import styled from 'styled-components/native'

import routes from '../navigation/routes'
import { Button } from '../components/button'

const PageContainer = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
}))

export const DummyPage = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList, never>
  route: RouteProp<ParamListBase, string>
}) => {
  const nextRoute = !route.params
    ? routes.Help
    : (route.params as { nextScreen: routes }).nextScreen

  const nextRouteName = routes[nextRoute]
  console.log('Next Screen: ', nextRouteName)

  return (
    <PageContainer>
      <Text>{route.name} </Text>
      <View style={{ paddingHorizontal: 60 }}>
        <Button
          title={`Go ${nextRouteName}`}
          onPress={() => navigation.navigate(nextRouteName as never)}
        />
      </View>
    </PageContainer>
  )
}
