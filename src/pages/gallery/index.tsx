// DESCRIPTION: A page that lists demonstration of different components

import React, { useState } from 'react'
import {
  ColorValue,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import { BusyIndicator } from '../../components/busy-indicator'

import { alertAction, graphQLAction } from './actions'

const SafePageContainer = styled.SafeAreaView(() => ({
  flex: 1,
  marginTop: StatusBar.currentHeight || 0,
}))

const SeparatorLine = styled.View(() => ({
  height: 1,
  width: '100%',
  borderWidth: 1,
  borderColor: 'lightgrey',
}))

type GalleryItem = {
  label: string
  action: () => void
}

const actionBusy = (
  setBusy: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
  setBusy(true)
  setTimeout(() => setBusy(false), 5000)
}

const galleryItems = (
  setBusy: React.Dispatch<React.SetStateAction<boolean>>,
): GalleryItem[] => {
  return [
    { label: 'GraphQL example', action: graphQLAction },
    { label: 'Busy Indicator (5 seconds)', action: () => actionBusy(setBusy) },
    { label: 'Alert', action: alertAction },
    { label: 'Google Maps (TODO)', action: () => {} },
    { label: 'Bar code scanner (TODO)', action: () => {} },
    { label: 'Webview (TODO)', action: () => {} },
    { label: 'Geolocation (TODO)', action: () => {} },
    { label: 'Camera (TODO)', action: () => {} },
    { label: 'Carousel (TODO)', action: () => {} },
    { label: 'Date time picker (TODO)', action: () => {} },
    { label: 'secure storage (TODO)', action: () => {} },
  ]
}

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
}: {
  item: GalleryItem
  onPress: () => void
  backgroundColor: ColorValue
  textColor: ColorValue
}) => (
  <TouchableOpacity onPress={onPress} style={{ backgroundColor }}>
    <View
      style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: textColor }}>{item.label}</Text>
    </View>
  </TouchableOpacity>
)

export const GalleryPage = () => {
  const theme = useTheme()
  const [isBusy, setBusy] = useState(false)

  const renderItem = ({ item }: { item: GalleryItem }) => {
    const color = theme.colors.secondary
    const backgroundColor = theme.colors.primary

    return (
      <Item
        item={item}
        onPress={item.action}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    )
  }

  const galleryData = galleryItems(setBusy)

  return (
    <SafePageContainer>
      {isBusy && <BusyIndicator />}
      <FlatList
        data={galleryData}
        renderItem={renderItem}
        keyExtractor={item => item.label}
        ItemSeparatorComponent={() => <SeparatorLine />}
        extraData={' '}
      />
    </SafePageContainer>
  )
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  separatorLine: {
    height: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
})
*/
