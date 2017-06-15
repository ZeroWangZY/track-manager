import React from 'react';
import { LineChart, Line ,XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
const data = [
      {name: '0点', 订单数量:  0, amt: 2210},
      {name: '1点', 订单数量:  20, amt: 2210},
      {name: '2点', 订单数量:  3, amt: 2290},
      {name: '3点', 订单数量:  1, amt: 2000},
      {name: '4点', 订单数量:  0, amt: 2181},
      {name: '5点', 订单数量:  0, amt: 2500},
      {name: '6点', 订单数量:  5, amt: 2500},
      {name: '7点', 订单数量:  2, amt: 2100},
      {name: '8点', 订单数量:  5, amt: 2100},
      {name: '9点', 订单数量:  16, amt: 2100},
      {name: '10点', 订单数量:  33, amt: 2100},
      {name: '11点', 订单数量:  51, amt: 2100},
      {name: '12点', 订单数量:  39, amt: 2100},
      {name: '13点', 订单数量:  29, amt: 2100},
      {name: '14点', 订单数量:  41, amt: 2100},
      {name: '15点', 订单数量:  31, amt: 2100},
      {name: '16点', 订单数量:  45, amt: 2100},
      {name: '17点', 订单数量:  57, amt: 2100},
      {name: '18点', 订单数量:  26, amt: 2100},
      {name: '19点', 订单数量:  25, amt: 2100},
      {name: '20点', 订单数量:  24, amt: 2100},
      {name: '21点', 订单数量:  18, amt: 2100},
      {name: '22点', 订单数量:  19, amt: 2100},
      {name: '23点', 订单数量:  5, amt: 2100},
      {name: '24点', 订单数量:  27, amt: 2100},


];
const Chart = React.createClass({
	render () {
  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="订单数量" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
  }
})

export default Chart
