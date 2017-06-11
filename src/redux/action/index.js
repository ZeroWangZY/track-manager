/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
import { message } from 'antd';

const initPoints = (points) => (
    {
        type: 'GET_POINTS',
        data: points
    }
);
export const fetchPoints = (index) => {
    return (dispatch) => {
        return fetch(address+'/track/getpointsbyid?id='+index, {
            credentials: 'same-origin',
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((json) =>  {
                console.log('get json');
                console.log(json);
                if(json.code=='1'){
                    message.error(json.msg);
                }
                dispatch(initPoints(json));
            });
    }
};