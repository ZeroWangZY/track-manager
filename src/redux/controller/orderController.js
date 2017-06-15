'use strict';
import React  from "react";
import OrderList from '../../component/order/orderList'
import {getOrder,addOrder} from '../action/index'
import { connect } from 'react-redux'
import {store} from '../../index';
class OrderControllerCpnt extends React.Component{
    constructor(){
      super();
      store.dispatch(getOrder());
    }
    render(){

      return (
        <div>
          <OrderList orders = {this.props.orders}/>
        </div>
      )
    }
}

const mapStateToProps = (state) =>{
    return{
        orders:state.orders
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addOrder:(order)=>{
            dispatch(addOrder(order));
        }
    }
}

const OrderController = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderControllerCpnt)
export default OrderController;
