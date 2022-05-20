// standard app switch
import React from 'react'
import { Switch as NativeSwitch, SwitchProps } from 'react-native'

export const Switch = (
  props: SwitchProps & React.RefAttributes<NativeSwitch>,
) => <NativeSwitch {...props} />
