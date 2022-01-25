import * as ActionTypes from "../actionTypes/metadataActionTypes";

export const createMetadata = (metadata) => ({
  type: ActionTypes.CREATE_METADATA_REQUEST,
  payload: metadata,
});

export const createMetadataSuccess = (metadata) => ({
  type: ActionTypes.CREATE_METADATA_SUCCESS,
  payload: metadata,
});

export const createMetadataError = (error) => ({
  type: ActionTypes.CREATE_METADATA_ERROR,
  payload: error,
});

export const getAllMetadata = () => ({
  type: ActionTypes.GET_ALL_METADATA,
  payload: undefined,
});

export const getAllMetadataSuccess = (metadatas) => ({
  type: ActionTypes.GET_ALL_METADATA_SUCCESS,
  payload: metadatas,
});

export const getAllMetadataError = (error) => ({
  type: ActionTypes.GET_ALL_METADATA_ERROR,
  payload: error,
});
