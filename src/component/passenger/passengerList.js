'use strict';
import React  from "react";
import PassengerItem from './PassengerItem'

class PassengerList extends React.Component{

    render(){
      return (
        <div>
          {this.props.passengers.map((passenger,index) =>
            <PassengerItem
                passenger = {passenger}
            />
            )
          }
        </div>
      )
    }
}

export default PassengerList;
