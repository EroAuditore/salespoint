export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAIL = 'LOAD_FAIL';

export const loadProducts = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload,
});

export const loadFail = (payload) => ({
  type: LOAD_FAIL,
  payload,
});
