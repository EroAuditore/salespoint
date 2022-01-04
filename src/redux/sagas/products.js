import { put, call, all, takeEvery } from "redux-saga/effects";
import apiCall from "../api/index";
import { openToast } from "../reducers/toast";
import {
  LOAD_PRODUCTS,
  LOAD_SUCCESS,
  LOAD_FAIL,
  UPDATE_PRODUCTS,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  CREATE_PRODUCTS,
  CREATE_SUCCESS,
  CREATE_FAIL,
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
    yield put(
      openToast({ severity: "success", message: "Producto actualizado" })
    );
  } catch (error) {
    yield put(
      openToast({
        severity: "error",
        message: "No se actualizo el producto intentelo mas tarde",
      })
    );
    yield put({ type: UPDATE_FAIL });
  }
}

export function* createProducts({ payload }) {
  try {
    const result = yield call(apiCall, "product/new", payload, null, "POST");

    yield put({ type: CREATE_SUCCESS, result });
    yield put(openToast({ severity: "success", message: "Producto creado" }));
  } catch (error) {
    yield put(
      openToast({
        severity: "error",
        message: "No se creo el producto intentelo mas tarde",
      })
    );
    yield put({ type: CREATE_FAIL });
  }
}

//CREATE PRODUCTS

// Watcher
export default function* products() {
  yield all([
    yield takeEvery(LOAD_PRODUCTS, loadProducts),
    yield takeEvery(UPDATE_PRODUCTS, updateProducts),
    yield takeEvery(CREATE_PRODUCTS, createProducts),
  ]);
}
