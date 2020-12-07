/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getService = /* GraphQL */ `
  query GetService($serviceName: String!) {
    getService(serviceName: $serviceName) {
      serviceName
      icon
      cloudProviderId
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
        cloudProviderId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const listServicesByCloudProvider = /* GraphQL */ `
  query ListServicesByCloudProvider(
    $cloudProviderId: String
    $sortDirection: ModelSortDirection
    $filter: ModelServiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicesByCloudProvider(
      cloudProviderId: $cloudProviderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        serviceName
        icon
        cloudProviderId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCloudProvider = /* GraphQL */ `
  query GetCloudProvider($name: String!) {
    getCloudProvider(name: $name) {
      name
      createdAt
      updatedAt
      services {
        items {
          serviceName
          icon
          cloudProviderId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listCloudProviders = /* GraphQL */ `
  query ListCloudProviders(
    $name: String
    $filter: ModelCloudProviderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCloudProviders(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        createdAt
        updatedAt
        services {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
