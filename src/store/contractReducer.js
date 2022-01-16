import * as actionTypes from './actions/contractActions';

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

export const initialState = {
    contracts: [],
    contract: undefined,
    error: undefined
 };

 
const contractReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.GET_CONTRACTS_SUCCESS:         
            return {
               ...state,
               contracts: action.payload,
               error: undefined
            };
        case actionTypes.GET_CONTRACTS_ERROR:
            return {
                ...state,
                error: action.payload,
                contracts: undefined
            };
        case actionTypes.UPDATE_CONTRACT_SUCCESS:             
            return {
               ...state,
               contract: action.payload,
               error: undefined
            };
        case actionTypes.UPDATE_CONTRACT_ERROR:
            return {
                ...state,
                error: action.payload,
                contract: undefined
            };
        default:
            return state;
        }
};

export default contractReducer;