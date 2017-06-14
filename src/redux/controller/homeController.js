'use strict';
import React  from "react";
import MapController from './MapController'
import {getPointById} from '../../api/api';
class HomeController extends React.Component{

    constructor(){
      super();
      this.state={
        passengerCount:0
      }
    }


    componentDidMount(){


    }

    render(){
      return (
        <div>
        <MapController/>
        {this.state.passengerCount}
        </div>

      )
    }
}

export default HomeController;
