/**
 * Created by ZeroW on 2017/6/10.
 */
import {addPassenger} from '../../api/api';


const passengers = (state = [],action) =>{
    switch (action.type) {
        case 'GET_ALL_PASSENGERS':
            console.log("getpassenger reducer works")
            return action.data;
            break;

        case 'ADD_PASSENGER':
            console.log('add passenger reducer');
            addPassenger(action.passenger);
            return [...state,action.passenger];

            break;
        default:
            return state;

    }
}


export default passengers
