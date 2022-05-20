import React from 'react'
// import { unAuthorisedUser, User } from './account-storage-provider'

export interface UserDetails {
  email: string
  firstName: string
  lastName: string
  id: string
}

export interface AuthContextProps {
  isAuthenticated: boolean
  user: UserDetails | null
  setUser: (user: UserDetails) => void
  showLoginModal: (visible: boolean) => void
}

/*
export const setUpNewUserPreferences = (user: User): User => ({
  ...user,
  preferences: {
    postCodes: [],
    brands: [],
    categories: [],
    retailers: [],
  },
})
*/

const initialState: AuthContextProps = {
  isAuthenticated: false,
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (user: UserDetails) => {
    throw new Error('userNotSetup')
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  showLoginModal: (visible: boolean) => {},
}

export const AuthContext = React.createContext<AuthContextProps>(initialState)

export const useAuth = () => React.useContext(AuthContext)
