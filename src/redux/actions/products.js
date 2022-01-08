//LOAD PRODUCTS
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";
//UPDATE PRODUCS
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAIL = "UPDATE_FAIL";
//CREATE PRODUCTS
export const CREATE_PRODUCTS = "CREATE_PRODUCTS";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const CREATE_FAIL = "LOAD_FAIL";

/******* LOAD PRODUCTS *******/
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

/******* UPDATE PRODUCTS *******/

export const updateProducts = (payload) => ({
  type: UPDATE_PRODUCTS,
  payload,
});

export const updateSuccess = (payload) => ({
  type: UPDATE_SUCCESS,
  payload,
});

export const updateFail = (payload) => ({
  type: UPDATE_FAIL,
  payload,
});

/******* CREATE PRODUCTS *******/

export const createProducts = (payload) => ({
  type: CREATE_PRODUCTS,
  payload,
});

export const createSuccess = (payload) => ({
  type: CREATE_SUCCESS,
  payload,
});

export const createFail = (payload) => ({
  type: CREATE_FAIL,
  payload,
});
