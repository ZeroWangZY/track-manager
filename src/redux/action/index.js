/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
import { message } from 'antd';
import {getPointById,fetchAllPassenger} from '../../api/api';
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
