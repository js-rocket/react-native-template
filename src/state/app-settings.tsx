import React, { useContext, useState } from 'react'

export type AppSetting = {
  isDarkmode: boolean
  language: 'en' | 'es' | 'fr'
}

export type AppSettingsContextProps = {
  isDarkmode: boolean
  setIsDarkmode: (_: boolean) => void
}

export const initialState: AppSettingsContextProps = {
  isDarkmode: false,
  setIsDarkmode: (_: boolean) => {},
}

const AppSettingsContext =
  React.createContext<AppSettingsContextProps>(initialState)

export const useAppSettings = () => useContext(AppSettingsContext)

export const AppSettingsContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const setIsDarkmode = (darkmode: boolean) => {
    _setIsDarkmode({
      isDarkmode: darkmode,
      setIsDarkmode,
    })
  }
  const initValue = { isDarkmode: false, setIsDarkmode }
  const [_isDarkmode, _setIsDarkmode] = useState(initValue)

  return (
    <AppSettingsContext.Provider value={_isDarkmode}>
      {children}
    </AppSettingsContext.Provider>
  )
}
