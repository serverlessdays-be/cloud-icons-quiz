/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCloudProvider = /* GraphQL */ `
  mutation CreateCloudProvider(
    $input: CreateCloudProviderInput!
    $condition: ModelCloudProviderConditionInput
  ) {
    createCloudProvider(input: $input, condition: $condition) {
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
export const updateCloudProvider = /* GraphQL */ `
  mutation UpdateCloudProvider(
    $input: UpdateCloudProviderInput!
    $condition: ModelCloudProviderConditionInput
  ) {
    updateCloudProvider(input: $input, condition: $condition) {
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
export const deleteCloudProvider = /* GraphQL */ `
  mutation DeleteCloudProvider(
    $input: DeleteCloudProviderInput!
    $condition: ModelCloudProviderConditionInput
  ) {
    deleteCloudProvider(input: $input, condition: $condition) {
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
