import { call, put } from "redux-saga/effects";
import { createMetadata, getAllMetadata } from "sagas/requests/metadata";
import {
  createMetadataSuccess,
  createMetadataError,
  getAllMetadataSuccess,
  getAllMetadataError,
} from "store/actions/metadataActions";

export function* handleCreateMetadata({ payload }) {
  try {
    const response = yield call(createMetadata, payload);
    console.log("res", response);
    if (response.status === 200) {
      yield put(createMetadataSuccess(response.data));
    } else {
      yield put(createMetadataError(response.data));
    }
  } catch (error) {
    yield put(createMetadataError(error.response.data));
  }
}

export function* handleGetAllMetadata({ payload }) {
  try {
    const response = yield call(getAllMetadata, payload);
    if (response.status === 200) {
      yield put(getAllMetadataSuccess(response.data.data));
    } else {
      yield put(getAllMetadataError(response.data.data));
    }
  } catch (error) {
    yield put(getAllMetadataError(error.response.data));
  }
}
