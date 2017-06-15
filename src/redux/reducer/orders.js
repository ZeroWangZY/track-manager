/**
 * Created by ZeroW on 2017/6/10.
 */
import {addOrder} from '../../api/api';


const orders = (state = [],action) =>{
    switch (action.type) {
        case 'GET_ALL_ORDER':
            console.log("getorder reducer works")
            return action.data;
            break;

        case 'ADD_ORDER':
            console.log('add order reducer');
            addOrder(action.order);
            return [...state,action.order];

            break;
        default:
            return state;

    }
}


export default orders
