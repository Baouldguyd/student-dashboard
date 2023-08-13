import React from 'react';
import { RiseOutlined} from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';

const ResultsApp = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Your Rate" value={7} prefix={<RiseOutlined/>} suffix="/ 10" />
    </Col>
    <Col span={12}>
      <Statistic title="Your Performance" value={75} suffix="/ 100" />
    </Col>
  </Row>
);
export default ResultsApp;
