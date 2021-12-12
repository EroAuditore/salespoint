import { all } from 'redux-saga/effects';

import products from './products';

// Es donde se van a ejecutar todos los watchers
export default function* rootSaga() {
  yield all([products()]);
}
