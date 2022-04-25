// Be sure to make native background color to match with the command ./run update-app-splash 508aa8
export const SPLASH_BACKGROUND_COLOR = '#508aa8'

// All possible API results tha this application will deal with
export enum ApiStatus {
  OK,
  NO_AUTH,
  TIMEOUT,
  NO_NETWORK,
  UNKNOWN,
}

export const API_BASE_URL = 'https://js-rocket.github.io/mock-api' // no trailing slash
