import { ApiStatus } from './constants'

export type ApiResponse = {
  status: ApiStatus
  result: Object | string | null
}

export type LoginResponse = {
  email: string
  jwt: string
  firstname: string
  lastname: string
}

// declare module '*.svg' {
//   import { SvgProps } from 'react-native-svg'
//   const content: React.FC<SvgProps>
//   export default content
// }
