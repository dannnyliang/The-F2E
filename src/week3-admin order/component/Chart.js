import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import '../style/Chart.css'

class Chart extends Component {
  render () {
    return (
      <Row className="area">
      <Col md="12" className="chart">
        <div class="area-head mb-3">Activity</div>

        <LineChart width={1056} height={400} data={data}>
          <Line type="monotone" dataKey="revenue" stroke="#7ED321" />
          <Line type="monotone" dataKey="cost" stroke="#D0021B" />
          <Line type="monotone" dataKey="income" stroke="#4A90E2" />

          <CartesianGrid stroke="#EBEBEB" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>

      </Col>
      </Row>
    )
  }
}

export default Chart

const data = [
  { name: 'JUN 6', revenue: 4000, cost: 2400, income: 2400 },
  { name: 'JUN 7', revenue: 3000, cost: 1398, income: 2210 },
  { name: 'JUN 8', revenue: 2000, cost: 9800, income: 2290 },
  { name: 'JUN 9', revenue: 2780, cost: 3908, income: 2000 },
  { name: 'JUN 10', revenue: 1890, cost: 4800, income: 2181 },
  { name: 'JUN 11', revenue: 2390, cost: 3800, income: 2500 },
  { name: 'JUN 12', revenue: 3490, cost: 4300, income: 2100 },
  { name: 'JUN 13', revenue: 3490, cost: 4300, income: 2100 },
];