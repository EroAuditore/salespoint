import { put, call, all, takeEvery } from "redux-saga/effects";
import apiCall from "../api/index";
import {
  fetchSuccess,
  fetch,
  removeClient,
  removeClientSucess,
  addClient,
  addClientSuccess,
} from "../reducers/clients";

// Fetch clients

export function* loadClients({ payload }) {
  try {
    const result = yield call(apiCall, "clients", payload, null, "GET");
    yield put(fetchSuccess(result));
  } catch (error) {
    console.log("Error get clients", error);
  }
}

export function* newClient({ payload }) {
  try {
    console.log("payload", payload);
    const result = yield call(apiCall, "client/new", payload, null, "POST");
    yield put(addClientSuccess(result));
  } catch (error) {
    console.log("Error get clients", error);
  }
}
//delete client

export function* deleteClient({ payload }) {
  try {
    const result = yield call(
      apiCall,
      "client/delete",
      payload,
      null,
      "DELETE"
    );
    yield put(removeClientSucess(result));
  } catch (error) {
    console.log("Error get clients", error);
  }
}

// Watcher
export default function* clients() {
  yield all([
    yield takeEvery(fetch, loadClients),
    yield takeEvery(addClient, newClient),
    yield takeEvery(removeClient, deleteClient),
  ]);
}
