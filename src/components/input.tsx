// standard app input field

import React from 'react'
import styled from 'styled-components/native'

const StyleTextInput = styled.TextInput(() => ({
  minWidth: '100%',
  minHeight: 32,
  backgroundColor: 'white',
  color: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5,
  paddingHorizontal: 10,
}))

export const Input = (props: any) => (
  <StyleTextInput underlineColorAndroid="white" {...props} />
)
