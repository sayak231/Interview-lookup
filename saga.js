import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/action-types";
import { getUserId, getData, postData, putData, deleteData } from "../services";

export function* watchGetUserApi() {
  yield takeLatest(types.GET_USER_ID, getUserFromApi);
}

function* getUserFromApi() {
  try {
    const data = yield call(getUserId);
    const { results, status, message } = data;
    if (status === "error") {
      yield put({
        type: types.GET_USER_ID_FAIL,
        results: results,
        status: status,
        message: message,
      });
    }
    yield put({
      type: types.GET_USER_ID_SUCCESS,
      results: results,
      status: status,
      message: message,
    });
  } catch (error) {
    throw error;
  }
}
