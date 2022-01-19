import axios from "axios";
import { environment } from "environment";

export const requestSignInUser = async (login) => {
  return await axios.post(
    `${environment.auth_url}/${environment.tenantId}/login`,
    login
  );
};

export const requestLogoutUser = async (logout) => {
  return await axios.post(
    `${environment.auth_url}/${environment.tenantId}/logout`,
    logout
  );
};

export const requestRegisternUser = async (user) => {
  return await axios.post(
    `${environment.auth_url}/${environment.tenantId}/signup`,
    user
  );
};
