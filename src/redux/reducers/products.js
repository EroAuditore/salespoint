import { LOAD_PRODUCTS, LOAD_SUCCESS, LOAD_FAIL } from './../actions/products';

const initialState = { data: [] };

export const productsReducer = (state = initialState, action) => {
  console.log('action type', action.type);
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, data: action.result.data.data };
    case LOAD_FAIL:
      return { ...state };
    default:
      return state;
  }
};
