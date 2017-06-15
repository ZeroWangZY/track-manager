/**
 * Created by ZeroW on 2017/6/10.
 */
import {addDriver} from '../../api/api';


const drivers = (state = [],action) =>{
    switch (action.type) {
        case 'GET_ALL_DRIVER':
            console.log("getdriver reducer works")
            return action.data;
            break;

        case 'ADD_DRIVER':
            console.log('add driver reducer');
            addDriver(action.driver);
            return [...state,action.driver];

            break;
        default:
            return state;

    }
}


export default drivers
