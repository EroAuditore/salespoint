import { combineReducers } from "redux";
import { productsReducer } from "./products";
import toastReducer from "./toast";

const allReducers = combineReducers({
  products: productsReducer,
  toast: toastReducer,
});

export default allReducers;
