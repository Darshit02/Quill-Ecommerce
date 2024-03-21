import { api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_REQUEST } from "./ActionType";

export const createOrder = (reqData) => async (dispatch) => {
    console.log("req Data" , reqData);
    dispatch ({type : CREATE_ORDER_REQUEST})
    try {
        const {data} = await api.post(`/api/orders` ,reqData.address)
        if(data.id){
            reqData.navigate({search : `step=3&orderId=${data.id}`})
        }
        console.log("create Order - " ,data);
        dispatch({type : CREATE_ORDER_SUCCESS, payload : data})
    } catch (error) {
        console.log("create Order - " ,error);
        dispatch({
            type : CREATE_ORDER_FAILURE,
            payload : error.message
        })
    }
}


export const getOrderById = (reqData) => async (dispatch) => { 
    console.log("BYID", orderId);
    dispatch({type : GET_ORDER_BY_ID_REQUEST})
    try {
        const {data} = await api.get(`/api/orders/${orderId}`)
        console.log("bYID",data);
        dispatch({
          type : GET_ORDER_BY_ID_SUCCESS,
            payload : data  
        })
    } catch (error) {
        dispatch({
            type : GET_ORDER_BY_ID_FAILURE,
            payload : error.message
        })
    }
}