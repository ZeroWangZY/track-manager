/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
import { message } from 'antd';
import {getPointById,fetchAllPassenger,fetchAllDriver,fetchAllOrder} from '../../api/api';
const initPoints = (points) => (
    {
        type: 'GET_POINTS',
        data: points
    }
);
export const fetchPoints = (index) => {
    return (dispatch) => {
        return getPointById(index).then((json) =>  {
                dispatch(initPoints(json));
                });
    }
};

export const addPassenger= (passenger) =>{
    return{
        type:'ADD_PASSENGER',
        passenger
    }
}

export const deletePassenger= (id) =>{
    return{
        type:'DELETE_PASSENGER',
        id
    }
}

const getAllPassenger = (passengers) => (
    {
        type: 'GET_ALL_PASSENGERS',
        data: passengers
    }
);
export const getPassenger = () => {
    return (dispatch) => {
        return fetchAllPassenger().then((json) =>  {
                dispatch(getAllPassenger(json));
                });
    }
};





export const addDriver= (driver) =>{
    return{
        type:'ADD_DRIVER',
        driver
    }
}
const getAllDriver = (drivers) => (
    {
        type: 'GET_ALL_DRIVER',
        data: drivers
    }
);
export const getDriver = () => {
    return (dispatch) => {
        return fetchAllDriver().then((json) =>  {
                dispatch(getAllDriver(json));
                });
    }
};





export const addOrder= (order) =>{
    return{
        type:'ADD_ORDER',
        order
    }
}
const getAllOrder = (orders) => (
    {
        type: 'GET_ALL_ORDER',
        data: orders
    }
);
export const getOrder = () => {
    return (dispatch) => {
        return fetchAllOrder().then((json) =>  {
                dispatch(getAllOrder(json));
                });
    }
};
