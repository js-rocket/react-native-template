// Be sure to make native background color to match with the command ./run update-app-splash 508aa8
export const SPLASH_BACKGROUND_COLOR = '#508aa8'

export enum StorageKeys {
  AUTH_TOKEN,
  USER_NAME,
  USER_EMAIL,
}

// All possible API results that this application will deal with
export enum ApiStatus {
  OK,
  ERROR,
  NO_AUTH,
  TIMEOUT,
  NO_NETWORK,
  UNKNOWN,
}

export const API_BASE_URL = 'https://js-rocket.github.io/mock-api' // no trailing slash
// export const API_BASE_URL = 'https://tulz.herokuapp.com' // no trailing slash

// Digitransit HSL
// Interactive query and schema docs here: https://api.digitransit.fi/graphiql/finland

export const GRAPHQL_URL =
  'https://api.digitransit.fi/routing/v1/routers/finland/index/graphql'
