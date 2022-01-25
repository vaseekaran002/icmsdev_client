import axios from "axios";
import { environment } from "environment";

export const createMetadata = async (metadata) => {
  return await axios.post(
    `${environment.api_url}/${environment.tenantId}/metadata/update`,
    metadata
  );
};

export const getAllMetadata = async () => {
  return await axios.get(
    `${environment.api_url}/${environment.tenantId}/metadata/list`
  );
};
