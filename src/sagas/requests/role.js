import axios from "axios";
import { environment } from "evironment";

export const createRole = async (role) => {
  console.log(role);
  return await axios.post(
    `${environment.api_url}/${environment.tenantId}/role/update`,
    role
  );
};

export const getAllRoles = async () => {
  return await axios.get(
    `${environment.api_url}/${environment.tenantId}/role/list`
  );
};
