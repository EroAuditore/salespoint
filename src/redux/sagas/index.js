import { all } from "redux-saga/effects";

import products from "./products";
import clients from "./clients";

// Es donde se van a ejecutar todos los watchers
export default function* rootSaga() {
  yield all([products(), clients()]);
}
