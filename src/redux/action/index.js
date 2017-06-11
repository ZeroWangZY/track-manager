/**
 * Created by ZeroW on 2017/6/10.
 */
import {address} from '../../config/config';
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
                console.log(res);
                return res.json()
            })
            .then((json) =>  {
                dispatch(initPoints(json))
            });
    }
};