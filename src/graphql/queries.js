/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = /* GraphQL */ `
  query GetService($serviceName: String!) {
    getService(serviceName: $serviceName) {
      serviceName
      icon
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $serviceName: String
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listServices(
      serviceName: $serviceName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        serviceName
        icon
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
