import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import { watcherSaga } from 'sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

// ==============================|| REDUX - MAIN STORE ||============================== //
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middleware)));
const persister = 'Free';
sagaMiddleware.run(watcherSaga);
export { store, persister };
