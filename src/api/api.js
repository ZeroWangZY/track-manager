import { address } from '../config/config'
import { message } from 'antd';

export const getPointById = (index) =>{
  return fetch(address+'/track/getpointsbyid?id='+index, {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) => {
        if(json.code=='1'){
            message.error(json.msg);
        }
        return json;
      })
}

export const getPassengerCount = () => {
  return fetch(address+'/passenger/getpassengercount', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('passenger count in api');
          console.log(json);
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;
    });
}



export const fetchAllPassenger = () => {
  return fetch(address+'/passenger/getallpassenger', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}

export const addPassenger = (passenger) => {
  $.ajax({
              url:address+'/passenger/addpassenger',
              type:'post',
              data:passenger,
              success: function(data,status){
                console.log('add success');
              },
              error: function(data,err){

              }
          });
}

export const getDriverCount = () => {
  return fetch(address+'/driver/getdrivercount', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('driver count in api');
          console.log(json);
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;
    });
}



export const fetchAllDriver = () => {
  return fetch(address+'/driver/getalldriver', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}

export const addDriver = (driver) => {
  $.ajax({
              url:address+'/driver/adddriver',
              type:'post',
              data:driver,
              success: function(data,status){
                console.log('add success');
              },
              error: function(data,err){

              }
          });
}





export const getOrderCount = () => {
  return fetch(address+'/order/getordercount', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('order count in api');
          console.log(json);
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;
    });
}
export const fetchAllOrder = () => {
  return fetch(address+'/order/getallorder', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}

export const addOrder = (order) => {
  $.ajax({
              url:address+'/order/addorder',
              type:'post',
              data:order,
              success: function(data,status){
                console.log('add success');
              },
              error: function(data,err){

              }
          });
}



export const getTaxiCount = () => {
  return fetch(address+'/taxi/gettaxicount', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('taxi count in api');
          console.log(json);
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;
    });
}





export const fetchHotPoints = () => {
  return fetch(address+'/track/gethotpoints', {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}

export const fetchPointsByOrder = (id) => {
  return fetch(address+'/track/getpointsbyorder?id='+id, {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}

export const fetchPriceByOrder = (id) => {
  return fetch(address+'/track/getpricebyorder?id='+id, {
      credentials: 'same-origin',
      method: "GET"
  })
      .then((res) => {
          return res.json()
      })
      .then((json) =>  {
          console.log('get json');
          if(json.code=='1'){
              message.error(json.msg);
          }
          return json;

    });
}
