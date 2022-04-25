// standard app button

import React from 'react'
import { GestureResponderEvent, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const ButtonView = styled.View(({ theme }) => ({
  // flex:1,
  minWidth: '100%',
  minHeight: 32,
  backgroundColor: theme.colors.accent,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
}))

const ButtonText = styled.Text(() => ({
  color: 'white',
}))

export const Button = ({
  title,
  onPress,
}: {
  title: string | JSX.Element
  onPress: (event: GestureResponderEvent) => void
}) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonView>
      {typeof title === 'string' ? <ButtonText>{title}</ButtonText> : title}
    </ButtonView>
  </TouchableOpacity>
)
