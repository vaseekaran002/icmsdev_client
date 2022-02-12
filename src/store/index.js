import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/rootReducer";
import { watcherSaga } from "sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

import { ICMS_USER_KEY } from "appConstants";

// ==============================|| REDUX - MAIN STORE ||============================== //
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const initReduxStore = () => {
  const icms_user = JSON.parse(localStorage.getItem(ICMS_USER_KEY));
  let preloadedState = {};
  if (icms_user) {
    preloadedState = { user: { user: icms_user } };
  }
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};

const store = initReduxStore();
const persister = "Free";
sagaMiddleware.run(watcherSaga);
export { store, persister };
