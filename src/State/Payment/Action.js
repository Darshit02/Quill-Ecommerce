import { API_BASE_URL, api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
} from "./ActionType.js";

export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/payment/${orderId}`);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.get(
      `/api/pyaments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );
    console.log("update Payment", data);
  } catch (error) {
    dispatch({
      type: UPDATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};
