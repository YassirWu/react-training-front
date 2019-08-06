import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { call, all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import user, { userSaga } from './user';
import comments from './comments';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  user,
  comments,
});

const rootSaga = function* rootSaga() {
  yield all([
    call(userSaga),
  ]);
};
sagaMiddleware.run(rootSaga);

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    sagaMiddleware,
  )),
);

export default store;
