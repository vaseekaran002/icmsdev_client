import axios from 'axios';

export const createRole = async (role) => {
    console.log(role)
    return await axios.post("http://localhost:8080/api/67efdecb-849f-4f21-8d7f-13df06a3ce09/role/update", role);
}

export const getAllRoles = async () => {
    return await axios.get("http://localhost:8080/api/67efdecb-849f-4f21-8d7f-13df06a3ce09/role/list");
}
// http://18.205.56.216:90/api/invoice