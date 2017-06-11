/**
 * Created by ZeroW on 2017/6/10.
 */
'use strict';
import React  from "react";
import { connect } from 'react-redux'
import Map from '../../component/Map';
import {fetchPoints} from '../action/index'
import {store} from '../../index';
import { Input } from 'antd';
const Search = Input.Search;

class MapControllerCpnt extends React.Component{
    constructor(){
        super();
        store.dispatch(fetchPoints(3));

    }
    render(){
        console.log('points is');
        console.log(this.props.points);

        return (
        <div>
            <Search placeholder="input taxi ID"
                    style={{ width: '200px' }}
                    onSearch={value => store.dispatch(fetchPoints(value))}/>
            <Map points={this.props.points}/>
        </div>
        )

    }
}

const mapStateToProps = (state) =>{
    return{
        points:state.points
    }
}

const MapController = connect(
    mapStateToProps,
)(MapControllerCpnt)

export default MapController;