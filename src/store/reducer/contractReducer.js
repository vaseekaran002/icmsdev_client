import * as actionTypes from '../actionTypes/contractActionTypes';

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
        case actionTypes.GET_CONTRACT_SUCCESS:             
            return {
               ...state,
               contract: action.payload,
               error: undefined
            };
        case actionTypes.UPDATE_CONTRACT_ERROR:
        case actionTypes.GET_CONTRACT_ERROR:
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