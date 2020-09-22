import { API, graphqlOperation, Storage } from 'aws-amplify'
import { listServices } from '../graphql/queries'


export const getAllServiceOptions = async () => {
    try {
        console.log('making api call')
        const result = await API.graphql({
            query: listServices,
            authMode: 'API_KEY',
        })
        const services = result.data.listServices.items
        console.log(`${JSON.stringify(services)}`)

        return services
    } catch (err) {
        console.log('err: ', err)
    }
}