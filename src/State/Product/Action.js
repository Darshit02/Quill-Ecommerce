import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    color,
    sizes,
    category,
    minPrice,
    maxPrice,
    minDiscount,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?category=${category}&color=${color}&pageNumber=${pageNumber}&pageSize=${pageSize}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&stock=${stock}&sort=${sort}
      `);
      // 
    console.log("product Data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error });
  }
};
