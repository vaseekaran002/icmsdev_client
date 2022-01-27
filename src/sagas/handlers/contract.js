import { call, put } from "redux-saga/effects";
import {
  getContracts,
  updateContract,
  getContract,
} from "sagas/requests/contract";
import {
  getContractsSuccess,
  getContractsError,
  updateContractSuccess,
  updateContractError,
  getContractSuccess,
  getContractError,
} from "store/actions/contractActions";

export function* handleGetContracts({ payload }) {
  try {
    const response = yield call(getContracts, payload);
    if (response.status === 200) {
      yield put(getContractsSuccess(response.data));
    } else {
      yield put(getContractsError(response.data));
    }
  } catch (error) {
    yield put(getContractsError(error.response.data));
  }
}

export function* handleUpdateContract({ payload }) {
  try {
    const response = yield call(updateContract, payload);
    if (response.status === 200) {
      yield put(updateContractSuccess(response.data));
    } else {
      yield put(updateContractError(response.data));
    }
  } catch (error) {
    yield put(updateContractError(error.response.data));
  }
}

export function* handleGetContract({ payload }) {
  try {
    const response = yield call(getContract, payload);
    if (response.status === 200) {
      yield put(getContractSuccess(response.data));
    } else {
      yield put(getContractError(response.data));
    }
  } catch (error) {
    yield put(getContractError(error.response.data));
  }
}
