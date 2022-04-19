// All possible API results tha this application will deal with
export enum ApiStatus {
  OK,
  NO_AUTH,
  TIMEOUT,
  NO_NETWORK,
  UNKNOWN,
}

export const API_BASE_URL = 'https://tulz.herokuapp.com' // no trailing slash