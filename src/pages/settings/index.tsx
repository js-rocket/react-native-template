// Page template
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { useAppSettings } from '../../state/app-settings'
import { Picker, Switch } from '../../components/elements'

const PageContainer = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: theme.colors.primary,
}))

const SettingOption = ({
  label,
  children,
}: {
  label: string
  children: JSX.Element
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: 'lightgrey',
        height: 50,
        alignItems: 'center',
      }}>
      <View style={{ flex: 1 }}>
        <Text>{label}</Text>
      </View>
      <View style={{ flex: 0 }}>{children}</View>
    </View>
  )
}

export const SettingsPage = () => {
  // hooks
  const [language, setLanguage] = useState('')
  const [country, setCountry] = useState('')
  const { isDarkmode, setIsDarkmode } = useAppSettings()

  // functions

  // events

  // display variables

  return (
    <PageContainer>
      <SettingOption label="Use light theme">
        <Switch onValueChange={setIsDarkmode} value={isDarkmode} />
      </SettingOption>
      <SettingOption label="Language">
        <Picker
          selectedValue={language}
          onValueChange={value => setLanguage(value)}>
          <Picker.Item label="Select language" value="" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Spanish" value="es" />
          <Picker.Item label="Hindi" value="hi" />
          <Picker.Item label="French" value="fr" />
          <Picker.Item label="Chinese" value="zh" />
        </Picker>
      </SettingOption>

      <SettingOption label="Country">
        <Picker
          selectedValue={country}
          onValueChange={value => setCountry(value)}>
          <Picker.Item label="Select country" value="" />
          <Picker.Item label="Australia" value="Australia" />
          <Picker.Item label="Belgium" value="Belgium" />
          <Picker.Item label="Canada" value="Canada" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Japan" value="Japan" />
        </Picker>
      </SettingOption>
    </PageContainer>
  )
}
