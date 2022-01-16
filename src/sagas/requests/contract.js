import axios from 'axios';

export const getContracts = async (contract) => {
    console.log(contract);
    return await axios.get("http://18.205.56.216:90/api/musician/"+contract.musicianId+"/contracts");
}

export const updateContract = async (contract) => {
    console.log(contract);
    return await axios.post("http://18.205.56.216:90/api/contract", contract);
}

export const getContract = async (contract) => {
    console.log(contract);
    return await axios.get("http://18.205.56.216:90/api/contract/"+contract.contractId);
}