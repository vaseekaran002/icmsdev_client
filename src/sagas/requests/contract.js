import axios from "axios";
import { environment } from "environment";

export const getContracts = async (contract) => {
  console.log("contract", contract);
  return await axios.get(
    `${environment.api_url}/musician/${contract.musicianId}/contracts`
  );
};

export const updateContract = async (contract) => {
  console.log("contract", contract);
  return await axios.post(
    `${environment.api_url}/musician/MUSIC-45/contract`,
    contract
  );
};

export const getContract = async (contract) => {
  console.log(contract);
  return await axios.get(
    `${environment.api_url}/contract/` + contract.contractId
  );
};
