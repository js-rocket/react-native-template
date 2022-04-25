import { ApiStatus } from './constants'

export interface ApiResponse {
  status: ApiStatus
  result: Object | string | null
}
