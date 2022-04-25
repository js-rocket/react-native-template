// Underlying library to retrieve remote data

import { ApiStatus } from '../constants'
import { ApiResponse } from '../types'

const defaultFetchOptions = {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  // mode: 'cors', // no-cors, *cors, same-origin
  // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: 'follow', // manual, *follow, error
  //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  timeout: 8 * 1000, // 8 second timeout
}

export const jsonFetch = async (
  url: string,
  options?: object,
): Promise<ApiResponse> => {
  const fetchOptions = { ...defaultFetchOptions, ...options }

  console.log(`${options.method}: ${url}`)

  try {
    const response = await fetch(url, { ...fetchOptions })

    if (response.status === 200) {
      const json = await response.json()
      return { status: ApiStatus.OK, result: json }
    }

    if (response.status === 403) {
      return { status: ApiStatus.NO_AUTH, result: { url, options } }
    }

    return { status: ApiStatus.UNKNOWN, result: response }
  } catch (error) {
    console.error(error)
    return { status: ApiStatus.UNKNOWN, result: `unknown error: ${error}` }
  }
}

export const jsonPost = async (
  url: string,
  options?: object,
): Promise<ApiResponse> => {
  return jsonFetch(url, { ...options, method: 'POST' })
}

export const jsonGet = async (
  url: string,
  options?: object,
): Promise<ApiResponse> => {
  return jsonFetch(url, { ...options, method: 'GET' })
}
