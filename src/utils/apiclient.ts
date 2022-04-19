import { ApiStatus, API_BASE_URL } from "../constants";
import { ApiResponse } from "../types";
import { jsonPost } from '../services/apiclient'


export const apiPost = async (url: string, data: object): Promise<ApiResponse> => {

  // TODO: Pass API token through header if user is authenticated
  const headers = {
    'Content-Type': 'application/json',
    'xdata-authorization': 'Bearer XXXXXXXXXXXXXXXXXXXXXXXXXX'
  }

  const apiResponse = await jsonPost(`${API_BASE_URL}${url}`, { headers, body: JSON.stringify(data) });

  console.log(JSON.stringify(apiResponse, null, 2));

  if (apiResponse.status === ApiStatus.OK) return apiResponse;

  // handle other situations
  if (apiResponse.status === ApiStatus.NO_AUTH) {
    //TODO:JS access token has expired.  renew token and try API call again
  }

  // For erros, maybe just flash a message on the screen
  if (apiResponse.status === ApiStatus.NO_NETWORK) return {
    status: apiResponse.status,
    result: 'No network connectivity'
  }

  // all other situations, show generic message
  return {
    status: apiResponse.status,
    result: 'Could not connect to server'
  }
}