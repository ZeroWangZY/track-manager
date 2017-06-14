'use strict';
import React  from "react";
import PassengerList from '../../component/passenger/passengerList'
import { connect } from 'react-redux'
import {store} from '../../index';
import {getPassenger} from '../action/index'

class PassengerControllerCpnt extends React.Component{
    constructor(){
      super();
      store.dispatch(getPassenger());
    }
    render(){
      return (
        <div>
          this is PassengerController
          <PassengerList
            passengers = {this.props.passengers}
          />
        </div>
      )
    }
}

const mapStateToProps = (state) =>{
    return{
        passengers:state.passengers
    }
}

const PassengerController = connect(
    mapStateToProps,
)(PassengerControllerCpnt)
export default PassengerController;
