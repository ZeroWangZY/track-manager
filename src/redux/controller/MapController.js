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
import { Spin } from 'antd';

const Search = Input.Search;

class MapControllerCpnt extends React.Component{

    state = { loading: false }
    toggle = (value) => {
        if(this.state.loading != value){
            this.setState({ loading: value });
        }

    }

    componentWillReceiveProps(){
        this.toggle(false);

    }
    render(){
        return (
        <div>
            <Search placeholder="input taxi ID"
                    style={{ width: '200px' }}
                    onSearch={value =>{
                        store.dispatch(fetchPoints(value));
                        this.toggle(true);
                    } }/>
            <Spin spinning={this.state.loading}>
                <Map points={this.props.points} type='line' />
            </Spin>
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
