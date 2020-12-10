import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

export const getAllServices = async () => {
  try {
    const result = await API.graphql({
      query: queries.listServices,
      authMode: "API_KEY",
    });
    const services = result.data.listServices.items;

    return services;
  } catch (err) {
    console.log("err: ", err);
  }
};

export const listServicesByCloudProvider = async (cloudProviderId) => {
  try {
    const result = await API.graphql({
      query: queries.listServicesByCloudProvider,
      variables: { cloudProviderId },
      authMode: "API_KEY",
    });
    const services = result.data.listServicesByCloudProvider.items;

    return services;
  } catch (err) {
    console.log("err: ", err);
  }
};
