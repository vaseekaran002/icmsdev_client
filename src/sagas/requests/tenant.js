import axios from "axios";
import { environment } from "environment";

export const createTenant = async(tenant)=>{
    return await axios.post(
        `${environment.api_url}/tenant`,
        tenant
    );
}

export const getAllTenants = async()=>{
    return await axios.get(
        `${environment.api_url}/tenant/list`
    );
};