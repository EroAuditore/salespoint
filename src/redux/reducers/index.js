import { combineReducers } from "redux";
import { productsReducer } from "./products";
import toastReducer from "./toast";

const allReducers = combineReducers({
  products: productsReducer,
  toastReducer,
});

export default allReducers;
