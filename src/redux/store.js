import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import allReducers from './Reducers';
// import rootSaga from './Sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  // allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

// LANZAR MIDDLEWARE
// sagaMiddleWare.run(rootSaga);

export default store;
