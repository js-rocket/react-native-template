// authentication related functions

import { LoginResponse } from '../types'
import { StorageKeys } from '../constants'
import { writeString } from './storage'

const signIn = async (loginResult: LoginResponse) => {
  await writeString(StorageKeys.AUTH_TOKEN, loginResult.jwt)
  await writeString(StorageKeys.USER_EMAIL, loginResult.email)
}

const signOut = async () => {
  await writeString(StorageKeys.AUTH_TOKEN, '')
  await writeString(StorageKeys.USER_EMAIL, '')
}

export { signIn, signOut }
