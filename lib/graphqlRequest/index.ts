import { GraphQLClient, RequestDocument, Variables } from 'graphql-request'

const host = 'http://localhost:3000'
const client = new GraphQLClient(host + '/graphql')

export const graphqlRequest = async <T>(
    document: RequestDocument,
    variables?: Variables
) => {
    try {
        return await client.request<T>(document, variables)
    } catch (error) {
        console.error(error)
        alert(error)
    }
}