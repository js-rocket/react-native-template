// Page template
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const PageContainer = styled.View(({ theme }) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: theme.colors.primary,
}))

export const TemplateXXYYPage = () => {
  // hooks

  // functions

  // events

  // display variables

  return (
    <PageContainer>
      <Text>new Page</Text>
    </PageContainer>
  )
}
