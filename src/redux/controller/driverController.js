'use strict';
import React  from "react";
import DriverList from '../../component/driver/DriverList'
import {getDriver,addDriver} from '../action/index'
import { connect } from 'react-redux'
import {store} from '../../index';

class DriverControllerCpnt extends React.Component{
    constructor(){
      super();
      store.dispatch(getDriver());
    }
    render(){

      return (
        <div>
          <DriverList drivers = {this.props.drivers}/>
        </div>
      )
    }
}

const mapStateToProps = (state) =>{
    return{
        drivers:state.drivers
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addDriver:(driver)=>{
            dispatch(addDriver(driver));
        }
    }
}

const DriverController = connect(
    mapStateToProps,
    mapDispatchToProps
)(DriverControllerCpnt)
export default DriverController;
