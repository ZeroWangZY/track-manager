/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
import { message } from 'antd';
import {getPointById,fetchAllPassenger,fetchAllDriver} from '../../api/api';
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
