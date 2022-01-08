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

const initialState = { data: [], isUpdated: false, errorUpdate: false };

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    /******* LOAD PRODUCTS *******/
    case LOAD_PRODUCTS:
      return { ...state };
    case LOAD_SUCCESS:
      action.result.data.data.forEach(function (obj) {
        obj._id = obj.id;
      });
      return { ...state, data: action.result.data.data };
    case LOAD_FAIL:
      return { ...state };
    /******* UPDATE PRODUCTS *******/
    case UPDATE_PRODUCTS:
      return { ...state, isUpdating: false, errorUpdate: false };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isUpdated: true,
        data: state.data.map((product) =>
          product.id === action.payload.id
            ? (product = action.payload)
            : product
        ),
      };
    case UPDATE_FAIL:
      return { ...state, errorUpdate: true };
    /******* CREATE PRODUCTS *******/
    case CREATE_PRODUCTS:
      return { ...state };
    case CREATE_SUCCESS:
      action.result.data.data._id = action.result.data.data.id;
      return { ...state, data: [...state.data, action.result.data.data] };
    case CREATE_FAIL:
      return { ...state };
    default:
      return state;
  }
};
