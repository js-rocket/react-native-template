import React from 'react'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components/native'

import { Face } from '../icons'

const RightWrapper = styled.View(() => ({
  flex: 1,
  justifyContent: 'center',
  marginRight: 10,
  // borderColor: 'green',
  // borderWidth: 1,
}))

const UserAvatar = () => {
  const theme = useTheme()

  return (
    <RightWrapper>
      <Face fill={theme.colors.default} />
    </RightWrapper>
  )
}

export { UserAvatar }
