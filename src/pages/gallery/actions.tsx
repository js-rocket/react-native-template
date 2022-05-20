import { Alert } from 'react-native'
import { ApiStatus } from '../../constants'
import { apiGraphql } from '../../utils/apiclient'

export const alertAction = () => {
  Alert.alert('Hello', 'world', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ])
}

export const graphQLAction = async () => {
  // With variables example
  // const variables = { id: 'MATKA:601744' }
  // const query = `query TestQuery($id:String!) {
  //   agency(id:$id) {
  //     gtfsId, name, timezone
  //   }
  // }`
  // const response = await apiGraphql(query, variables)

  // Without variables example
  const query = `query TestQuery {
    agencies {
      gtfsId
      name
      timezone
      url
    }
  }`
  const response = await apiGraphql(query)

  if (response.status === ApiStatus.OK) {
    const agency1 = response.result.data.agencies[0]

    Alert.alert('GraphQL result', `${agency1.gtfsId}  ${agency1.name}`)
  }
}
