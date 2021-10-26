import { put, call, all, takeEvery } from 'redux-saga/effects';
import apiCall from '../api/index';
import { LOAD_PRODUCTS, LOAD_SUCCESS, LOAD_FAIL } from './../actions/products';

// Fetch products
export function* loadProducts({ payload }) {
  try {
    const result = yield call(apiCall, 'products', payload, null, 'GET');
    console.log('result', result);
    yield put({ type: LOAD_SUCCESS, result });
  } catch (error) {
    console.log(error);
    yield put({ type: LOAD_FAIL });
  }
}

// Watcher
export default function* products() {
  yield all([yield takeEvery(LOAD_PRODUCTS, loadProducts)]);
}
