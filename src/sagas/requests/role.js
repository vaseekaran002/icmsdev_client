import axios from "axios";
import { environment } from "environment";

export const createRole = async (role) => {
  console.log(role);
  return await axios.post(
    `${environment.api_url}/${environment.tenantId}/role/update`,
    role
  );
};

export const getRolesByTenant = async () => {
  return await axios.get(
    `${environment.api_url}/${environment.tenantId}/role/list`
  );
};

export const getRolesByTenantAuth = async () => {
  return await axios.get(
    `${environment.auth_url}/${environment.tenantId}/role/list`
  );
};
