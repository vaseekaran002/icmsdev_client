import * as actionTypes from '../actionTypes/contractActionTypes';

export const getContracts = (contract) => ({
    type: actionTypes.GET_CONTRACTS,
    payload: contract
});

export const getContractsSuccess = (contracts) => ({
    type: actionTypes.GET_CONTRACTS_SUCCESS,
    payload: contracts
});

export const getContractsError = (error) => ({
    type: actionTypes.GET_CONTRACTS_ERROR,
    payload: error
});

export const getContract = (contract) => ({
    type: actionTypes.GET_CONTRACT,
    payload: contract
});

export const getContractSuccess = (contract) => ({
    type: actionTypes.GET_CONTRACT_SUCCESS,
    payload: contract
});

export const getContractError = (error) => ({
    type: actionTypes.GET_CONTRACT_ERROR,
    payload: error
});

export const updateContract = (contract) => ({
    type: actionTypes.UPDATE_CONTRACT,
    payload: contract
});

export const updateContractSuccess = (contract) => ({
    type: actionTypes.UPDATE_CONTRACT_SUCCESS,
    payload: contract
});

export const updateContractError = (error) => ({
    type: actionTypes.UPDATE_CONTRACT_ERROR,
    payload: error
});