import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { NavigationProp } from '@react-navigation/native'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import * as Icons from '../../components/icons'
import * as Svgimages from '../../components/svgimages'
import routes from '../../navigation/routes'

import { apiGet } from '../../utils/apiclient'
import { ApiStatus } from '../../constants'

const PageWrapper = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.primary,
  paddingHorizontal: 20,
}))

const LoginButtonText = (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={{ color: 'white', marginRight: 10 }}>Login</Text>
    <Icons.Login fill="white" />
  </View>
)

export const LoginPage = ({
  navigation,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList, never>
}) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onPressLogin = async () => {
    console.log(`Login: ${email} ${pass}`)

    const data = { email, pass }
    const response = await apiGet('/login', data)

    if (response.status === ApiStatus.OK) {
      return navigation.navigate(routes[routes.TabsHome] as never)
    }

    // TODO if something wrong flash error message
    // console.log(response.result);
  }

  return (
    <PageWrapper>
      {/* <Icons.Face fill='black' viewBox='0 0 24 24' width={64} height={64} /> */}
      <Svgimages.Tux fill="black" width={80} height={80} />
      <View style={{ height: 20 }} />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <View style={{ height: 20 }} />
      <Input
        placeholder="Password"
        value={pass}
        onChangeText={setPass}
        secureTextEntry={true}
      />
      <View style={{ height: 20 }} />
      <View style={{ width: '50%' }}>
        <Button title={LoginButtonText} onPress={onPressLogin} />
      </View>
    </PageWrapper>
  )
}
