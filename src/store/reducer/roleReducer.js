import * as actionTpyes from "../actionTypes/roleActionTypes"


export const initialState = {
    role: undefined,
    error: undefined
};

export const roleReducer = (state = initialState,action) => {
    switch(action.type){
        case actionTpyes.CREATE_ROLE_SUCCESS:
            return {
                ...state,
                role : action.paypoad,
                error : undefined
            }
        case actionTpyes.CREATE_ROLE_ERROR:
            return {
                ...state,
                role : undefined,
                error : action.payload
            }
        default:
            return state
    }
}

export default roleReducer