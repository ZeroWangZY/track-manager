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
