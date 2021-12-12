import { LOAD_PRODUCTS, LOAD_SUCCESS, LOAD_FAIL } from './../actions/products';

const initialState = { data: [] };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state };
    case LOAD_SUCCESS:
      action.result.data.data.forEach(function (obj) {
        obj._id = obj.id;
        delete obj.id;
      });
      return { ...state, data: action.result.data.data };
    case LOAD_FAIL:
      return { ...state };
    default:
      return state;
  }
};
