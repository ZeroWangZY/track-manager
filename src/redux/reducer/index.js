/**
 * Created by ZeroW on 2017/6/10.
 */
import { combineReducers } from 'redux';
import points from './points.js';
import passengers from './passengers.js'
import drivers from './drivers'

const mainReducer = combineReducers({
    points,
    passengers,
    drivers
})

export default mainReducer
