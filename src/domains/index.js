import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { call, all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import comments from './comments';

export * from './auth';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user,
  comments,
  auth,
});

const rootSaga = function* rootSaga() {
  yield all([
    call(userSaga),
    call(authSaga),
  ]);
};

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

export default store;