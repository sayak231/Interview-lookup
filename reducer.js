import { combineReducers } from "redux";
import * as types from "../actions/action-types";

const getUser = (state = { results: [] }, action) => {
  switch (action.type) {
    case types.GET_USER_ID_FAIL:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_USER_ID_SUCCESS:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: false,
      };
    case types.GET_USER_ID:
      return {
        ...state,
        results: action.results,
        message: action.message,
        status: action.status,
        loading: true,
      };
    default:
      return { ...state };
  }
};

// index reducer
import { combineReducers } from "redux";
import TasksReducer from "./tasks-reducer";

export default combineReducers({
  TasksReducer,
});


//redux store
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import RootReducers from "./reducers/index";
import RootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(RootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(RootSaga);

export default store;
