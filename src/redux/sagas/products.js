import { put, call, all, takeEvery } from "redux-saga/effects";
import apiCall from "../api/index";
import {
  LOAD_PRODUCTS,
  LOAD_SUCCESS,
  LOAD_FAIL,
  UPDATE_PRODUCTS,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
} from "./../actions/products";

// Fetch products
export function* loadProducts({ payload }) {
  try {
    const result = yield call(apiCall, "products", payload, null, "GET");
    yield put({ type: LOAD_SUCCESS, result });
  } catch (error) {
    yield put({ type: LOAD_FAIL });
  }
}

//UPDATE PRODUCTS

export function* updateProducts({ payload }) {
  try {
    yield call(apiCall, "product/update", payload, null, "PUT");
    yield put({ type: UPDATE_SUCCESS, payload });
  } catch (error) {
    yield put({ type: UPDATE_FAIL });
  }
}

//CREATE PRODUCTS

// Watcher
export default function* products() {
  yield all([
    yield takeEvery(LOAD_PRODUCTS, loadProducts),
    yield takeEvery(UPDATE_PRODUCTS, updateProducts),
  ]);
}
