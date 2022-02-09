import { combineReducers } from "redux";
import { productsReducer } from "./products";
import toastReducer from "./toast";
import clientsReducer from "./clients";

const allReducers = combineReducers({
  products: productsReducer,
  toast: toastReducer,
  clients: clientsReducer,
});

export default allReducers;
