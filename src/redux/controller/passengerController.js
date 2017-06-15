'use strict';
import React  from "react";
import PassengerList from '../../component/passenger/passengerList'
import { connect } from 'react-redux'
import {store} from '../../index';
import {getPassenger,addPassenger} from '../action/index'
import AddPassengerButton from '../../component/passenger/addPassengerButton'
import {getPassengerCount} from '../../api/api';

class PassengerControllerCpnt extends React.Component{
    constructor(){
      super();
      store.dispatch(getPassenger());
      this.state={
        count :2
      }
    }

    fetchCountHandler(allcount){
      this.setState({
        count:allcount
      })
    }

    componentDidMount(){
      var ss = this.fetchCountHandler.bind(this);
      getPassengerCount().then((json)=>{
        ss(json[0].count);
      })
    }
    render(){
      return (
        <div>
          <AddPassengerButton addPassenger = {this.props.addPassenger}/>
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
const mapDispatchToProps = (dispatch) =>{
    return{
        addPassenger:(passenger)=>{
            dispatch(addPassenger(passenger));
        }
    }
}

const PassengerController = connect(
    mapStateToProps,
    mapDispatchToProps
)(PassengerControllerCpnt)
export default PassengerController;
