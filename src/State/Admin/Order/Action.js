import { api } from "../../../config/apiConfig";
import {
  GET_ORDERS_SUCCESS,
  GET_ORDERS_REQUEST,
  GET_ORDERS_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  SHIP_ORDER_REQUEST,
  DELIVERED_ORDER_REQUEST,
  SHIP_ORDER_SUCCESS,
  SHIP_ORDER_FAILURE,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_FAILURE,
} from "./ActionType";

export const getOrders = () => async (dispatch) => {
  dispatch({ type: GET_ORDERS_REQUEST });
  try {
    const { response } = await api.get(`/api/admin/orders`);
    console.log("get all Orders - ", response.data);
    dispatch({ type: GET_ORDERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAILURE,
      payload: error.message,
    });
  }
};

export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST });
  try {
    const response = await api.put(`/api/admin/orders//${orderId}/confirmed`);
    const data = response.data;
    dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONFIRMED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const shipOrder = (orderId) => async (dispatch) => {
  dispatch({ type: SHIP_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
    dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDER_REQUEST });
  try {
    const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
    dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    const { data } = await api.delete(`/api/admin/orders/${orderId}/delete`);
    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
  }
};
