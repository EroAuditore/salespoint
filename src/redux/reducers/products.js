import { LOAD_PRODUCTS } from './../actions/products';

const initialState = { products: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, products: action.payload };
    case LOAD_FAIL:
      return { ...state };
    default:
      return state;
  }
};
