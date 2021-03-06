import { call, put } from "redux-saga/effects";
import {
  getMusicians,
  updateMusician,
  addMusicianMembers,
  getMusicianMembers,
} from "sagas/requests/musician";
import {
  getMusiciansSuccess,
  getMusiciansError,
  updateMusicianSuccess,
  updateMusicianError,
  addMusicianMembersSuccess,
  addMusicianMembersError,
  getMusicianMembersSuccess,
  getMusicianMembersError,
  getMusicianSuccess,
  getMusicianError,
} from "store/actions/musicianActions";

export function* handleGetMusicians({ payload }) {
  try {
    const response = yield call(getMusicians, payload);
    if (response.status === 200) {
      yield put(getMusiciansSuccess(response.data.data));
    } else {
      yield put(getMusiciansError(response.data.data));
    }
  } catch (error) {
    yield put(getMusiciansError(error.response.data));
  }
}

export function* handleGetMusician({ payload }) {
  try {
    const response = yield call(getMusicians, payload);
    if (response.status === 200) {
      yield put(getMusicianSuccess(response.data.data));
    } else {
      yield put(getMusicianError(response.data.data));
    }
  } catch (error) {
    yield put(getMusicianError(error.response.data));
  }
}

export function* handleUpdateMusician({ payload }) {
  try {
    const response = yield call(updateMusician, payload);
    if (response.status === 200) {
      yield put(updateMusicianSuccess(response.data.data));
    } else {
      yield put(updateMusicianError(response.data.error));
    }
  } catch (error) {
    yield put(updateMusicianError(error.response.data));
  }
}

export function* handleAddMusicianMembers({ payload }) {
  try {
    const response = yield call(addMusicianMembers, payload);
    if (response.status === 200) {
      yield put(addMusicianMembersSuccess(response.data.data));
    } else {
      yield put(addMusicianMembersError(response.data.error));
    }
  } catch (error) {
    yield put(addMusicianMembersError(error.response.data));
  }
}

export function* handleGetMusicianMembers({ payload }) {
  try {
    const response = yield call(getMusicianMembers, payload);
    if (response.status === 200) {
      yield put(getMusicianMembersSuccess(response.data.data));
    } else {
      yield put(getMusicianMembersError(response.data.error));
    }
  } catch (error) {
    yield put(getMusicianMembersError(error.response.data));
  }
}
