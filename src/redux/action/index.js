/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
import { message } from 'antd';
import {getPointById} from '../../api/api';
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
