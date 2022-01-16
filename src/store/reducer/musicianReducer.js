import * as actionTypes from '../actions/musicianActions';

export const getMusicians = (musician) => ({
    type: actionTypes.GET_MUSICIANS,
    payload: musician
});

export const getMusiciansSuccess = (musicians) => ({
    type: actionTypes.GET_MUSICIANS_SUCCESS,
    payload: musicians
});

export const getMusiciansError = (error) => ({
    type: actionTypes.GET_MUSICIANS_ERROR,
    payload: error
});

export const getMusicianMembers = (musicianId) => ({
    type: actionTypes.GET_MUSICIAN_MEMBERS,
    payload: musicianId
});

export const getMusicianMembersSuccess = (musicians) => ({
    type: actionTypes.GET_MUSICIAN_MEMBERS_SUCCESS,
    payload: musicians
});

export const getMusicianMembersError = (error) => ({
    type: actionTypes.GET_MUSICIAN_MEMBERS_ERROR,
    payload: error
});

export const addMusicianMembers = (member) => ({
    type: actionTypes.ADD_MUSICIAN_MEMBER,
    payload: member
});

export const addMusicianMembersError = (error) => ({
    type: actionTypes.ADD_MUSICIAN_MEMBER_ERROR,
    payload: error
});

export const updateMusician = (musician) => ({
    type: actionTypes.UPDATE_MUSICIAN,
    payload: musician
});

export const updateMusicianSuccess = (musician) => ({
    type: actionTypes.UPDATE_MUSICIAN_SUCCESS,
    payload: musician
});

export const updateMusicianError = (error) => ({
    type: actionTypes.UPDATE_MUSICIAN_ERROR,
    payload: error
});

export const initialState = {
    musicians: [],
    musician: undefined,
    error: undefined
 };

 
const musicianReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.GET_MUSICIANS_SUCCESS:
        case actionTypes.GET_MUSICIAN_MEMBERS_SUCCESS:         
            return {
               ...state,
               musicians: action.payload,
               error: undefined
            };
        case actionTypes.GET_MUSICIANS_ERROR:
        case actionTypes.GET_MUSICIAN_MEMBERS_SUCCESS:
            return {
                ...state,
                error: action.payload,
                musicians: undefined
            };
        case actionTypes.UPDATE_MUSICIAN_SUCCESS:             
            return {
               ...state,
               musician: action.payload,
               error: undefined
            };
        case actionTypes.UPDATE_MUSICIAN_ERROR:
            return {
                ...state,
                error: action.payload,
                musician: undefined
            };
        case actionTypes. ADD_MUSICIAN_MEMBER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
        }
};

export default musicianReducer;