'use strict';
import React  from "react";


class PassengerItem extends React.Component{

    render(){
      return (
        <div>
          {this.props.passenger.passengerid}  {this.props.passenger.passengername}  {this.props.passenger.phone}
        </div>
      )
    }
}

export default PassengerItem;
