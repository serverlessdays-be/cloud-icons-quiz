/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($owner: String) {
    onCreateService(owner: $owner) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($owner: String) {
    onUpdateService(owner: $owner) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($owner: String) {
    onDeleteService(owner: $owner) {
      serviceName
      icon
      cloudProviderId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateCloudProvider = /* GraphQL */ `
  subscription OnCreateCloudProvider($owner: String) {
    onCreateCloudProvider(owner: $owner) {
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
export const onUpdateCloudProvider = /* GraphQL */ `
  subscription OnUpdateCloudProvider($owner: String) {
    onUpdateCloudProvider(owner: $owner) {
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
export const onDeleteCloudProvider = /* GraphQL */ `
  subscription OnDeleteCloudProvider($owner: String) {
    onDeleteCloudProvider(owner: $owner) {
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
