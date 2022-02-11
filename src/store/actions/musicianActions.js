import * as actionTypes from "../actionTypes/musicianActionTypes";

export const getMusicians = (musician) => ({
  type: actionTypes.GET_MUSICIANS,
  payload: musician,
});

export const getMusiciansSuccess = (musicians) => ({
  type: actionTypes.GET_MUSICIANS_SUCCESS,
  payload: musicians,
});

export const getMusiciansError = (error) => ({
  type: actionTypes.GET_MUSICIANS_ERROR,
  payload: error,
});

export const getMusician = (musician) => ({
  type: actionTypes.GET_MUSICIAN,
  payload: musician,
});

export const getMusicianSuccess = (musicians) => ({
  type: actionTypes.GET_MUSICIAN_SUCCESS,
  payload: musicians,
});

export const getMusicianError = (error) => ({
  type: actionTypes.GET_MUSICIAN_ERROR,
  payload: error,
});

export const getMusicianMembers = (musicianId) => ({
  type: actionTypes.GET_MUSICIAN_MEMBERS,
  payload: musicianId,
});

export const getMusicianMembersSuccess = (musicians) => ({
  type: actionTypes.GET_MUSICIAN_MEMBERS_SUCCESS,
  payload: musicians,
});

export const getMusicianMembersError = (error) => ({
  type: actionTypes.GET_MUSICIAN_MEMBERS_ERROR,
  payload: error,
});

export const addMusicianMembers = (member) => ({
  type: actionTypes.ADD_MUSICIAN_MEMBER,
  payload: member,
});

export const addMusicianMembersSuccess = (member) => ({
  type: actionTypes.ADD_MUSICIAN_MEMBER_SUCCESS,
  payload: member,
});

export const addMusicianMembersError = (error) => ({
  type: actionTypes.ADD_MUSICIAN_MEMBER_ERROR,
  payload: error,
});

export const updateMusician = (musician) => ({
  type: actionTypes.UPDATE_MUSICIAN,
  payload: musician,
});

export const updateMusicianSuccess = (musician) => ({
  type: actionTypes.UPDATE_MUSICIAN_SUCCESS,
  payload: musician,
});

export const updateMusicianError = (error) => ({
  type: actionTypes.UPDATE_MUSICIAN_ERROR,
  payload: error,
});
