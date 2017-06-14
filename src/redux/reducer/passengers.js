/**
 * Created by ZeroW on 2017/6/10.
 */
const passengers = (state = [],action) =>{
    switch (action.type) {
        case 'GET_ALL_PASSENGERS':
            console.log("getpassenger reducer works")
            return action.data;
            break;
        default:
            return state;

    }
}


export default passengers
