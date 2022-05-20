// A picker/selector component implemented with React-Native Core components

import React, { ReactElement, useState } from 'react'
import {
  FlatList,
  Modal,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from 'styled-components/native'

const PICKER_ITEM_HEIGHT = 50
const PICKER_VISIBLE_ITEMS = 5

type PickerItemProps = { label: string; value: string }

type PickerProps = {
  selectedValue: string
  onValueChange: (value: string, index: number) => void
}

interface PickerIF {
  Item: ({ label, value }: PickerItemProps) => JSX.Element
}

const Picker_Item = ({ label }: PickerItemProps) => {
  return <Text>{label}</Text>
}

const Picker: React.FC<PickerProps> & PickerIF = props => {
  const theme = useTheme()
  let selectedLabel = ''
  const [opened, setOpened] = useState(false)
  const { width: ScreenWidth } = useWindowDimensions()

  const childrenArray = React.Children.toArray(props.children) as ReactElement[]
  const numberOfChildren = childrenArray.length

  const renderItems = ({
    item,
    index,
  }: {
    item: ReactElement
    index: number
  }) => {
    const itemProps = item.props
    return (
      <TouchableOpacity
        onPress={() => {
          if (itemProps.value !== '') {
            props.onValueChange(itemProps.value, index)
          }
          setOpened(false)
        }}>
        <View
          style={{
            height: PICKER_ITEM_HEIGHT,
            paddingHorizontal: 20,
            borderTopWidth: index > 0 ? 1 : 0,
            borderColor: theme.colors.default,
            justifyContent: 'center',
          }}>
          <Text style={{ color: theme.colors.default }}>{itemProps.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  if (numberOfChildren > 0) {
    const selectedItem = childrenArray.filter(item => {
      const pickerItemProps = item.props as PickerItemProps
      return pickerItemProps.value === props.selectedValue
    })
    selectedLabel = selectedItem.length === 1 ? selectedItem[0].props.label : ''
  }

  return (
    <>
      <TouchableOpacity onPress={() => setOpened(true)}>
        <View style={{ flexDirection: 'row', minWidth: 50 }}>
          <Text>{selectedLabel}</Text>
          <Text> &#9660; </Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={opened}
        transparent={true}
        onRequestClose={() => setOpened(false)}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(128,128,128,0.8)',
          }}>
          <View
            style={{
              maxHeight: PICKER_ITEM_HEIGHT * PICKER_VISIBLE_ITEMS,
              width: ScreenWidth * 0.8,
              backgroundColor: theme.colors.inverse,
            }}>
            <FlatList
              data={childrenArray}
              renderItem={renderItems}
              keyExtractor={(item: any, index: number) => `${index}`}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

Picker.Item = Picker_Item

export { Picker }
