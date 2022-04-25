import React from 'react'
import { ColorValue, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import * as Icons from '../components/icons'
import { DummyPage } from '../pages/dummy'
import { IntroPage } from '../pages/intro'
import { LoginPage } from '../pages/login'
import routes from './routes'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainNavigation = () => {
  const theme = useTheme()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes[routes.Intro]}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={routes[routes.Intro]}
          component={IntroPage}
          initialParams={{ nextScreen: routes.Login }}
        />
        <Stack.Screen
          name={routes[routes.TabsHome]}
          component={TabbedRoutes}
          initialParams={{ nextScreen: routes.Home }}
        />
        <Stack.Screen
          name={routes[routes.Login]}
          component={LoginPage}
          initialParams={{ nextScreen: routes.TabsHome }}
          options={{
            headerShown: true,
            title: '',
            headerStyle: { backgroundColor: theme.colors.primary },
          }}
        />
        <Stack.Screen
          name={routes[routes.Help]}
          component={DummyPage}
          initialParams={{ nextScreen: routes.Login }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const TabbedRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes[routes.Home]}
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Group>
        <Tab.Screen
          name={routes[routes.Home]}
          component={DummyPage}
          initialParams={{ nextScreen: routes.Login }}
        />
        <Tab.Screen
          name={routes[routes.Gallery]}
          component={DummyPage}
          initialParams={{ nextScreen: routes.Help }}
        />
        <Tab.Screen
          name={routes[routes.Settings]}
          component={DummyPage}
          initialParams={{ nextScreen: routes.Intro }}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}

const TABBAR_HEIGHT = 64

const TabBarButton = ({
  title,
  icon,
  textColor,
  color,
  onPress,
}: {
  title: string
  icon: JSX.Element
  textColor?: ColorValue
  color?: ColorValue
  onPress: () => void
}) => {
  const theme = useTheme()
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color ? color : theme.colors.secondary,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}>
      <View style={{ alignItems: 'center' }}>
        {icon}
        <Text style={{ color: textColor ? textColor : theme.colors.default }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

// TODO:JS determine correct type instead of any
const MyTabBar = ({ navigation }: { navigation: any }) => {
  const theme = useTheme()

  const buttonColor: ColorValue = theme.colors.secondary
  const iconColor: ColorValue = theme.colors.default

  return (
    <View
      style={{
        // width: Dimensions.get('window').width,
        height: TABBAR_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TabBarButton
        title="Home"
        icon={<Icons.Home fill={iconColor} />}
        color={buttonColor}
        onPress={() => navigation.navigate(routes[routes.Home])}
      />
      <TabBarButton
        title="Gallery"
        icon={<Icons.Search fill={iconColor} />}
        color={buttonColor}
        onPress={() => navigation.navigate(routes[routes.Gallery])}
      />
      <TabBarButton
        title="Settings"
        icon={<Icons.Settings fill={iconColor} />}
        color={buttonColor}
        onPress={() => navigation.navigate(routes[routes.Settings])}
      />
    </View>
  )
}
export default MainNavigation
