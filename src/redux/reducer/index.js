/**
 * Created by ZeroW on 2017/6/10.
 */
import { combineReducers } from 'redux';
import points from './points.js';
import passengers from './passengers.js'


const mainReducer = combineReducers({
    points,
    passengers
})

export default mainReducer
