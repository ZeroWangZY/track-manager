/**
 * Created by ZeroW on 2017/6/10.
 */
import {addPassenger} from '../../api/api';
import {address} from '../../config/config'

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
        case 'DELETE_PASSENGER':

            $.ajax({
                        url:address+'/passenger/deletepassenger',
                        type:'post',
                        data:{id:action.id},
                        success: function(data,status){
                          console.log('add success');
                        },
                        error: function(data,err){

                        }
                    });
            var newState = new Array();
            console.log(state);
            console.log(action.id);
            for (var i = 0;i<state.length;i++){
              if(state[i]!=action.id){
                newState.push(state[i])
              }
            }
            console.log(newState);
            return newState;
        default:
            return state;

    }
}


export default passengers
