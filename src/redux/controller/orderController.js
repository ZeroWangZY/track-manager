'use strict';
import React  from "react";
import OrderList from '../../component/order/orderList'
class OrderController extends React.Component{

    render(){
      return (
        <div>
          this is OrderController
          <OrderList />
        </div>
      )
    }
}

export default OrderController;
