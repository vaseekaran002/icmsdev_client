import * as actionTpyes from "../actions/roleActions"

export const createRole = (role) => ({
    type: actionTpyes.CREATE_ROLE_REQUEST,
    payload : role
})

export const createRoleSuccess = (role) => ({
    type : actionTpyes.CREATE_ROLE_SUCCESS,
    payload : role
})

export const createRoleError = (error) => ({
    type : actionTpyes.CREATE_ROLE_ERROR,
    payload : error
})


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