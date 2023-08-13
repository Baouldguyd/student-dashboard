import React from 'react';
import { Progress, Space } from 'antd';

const ProgDurationApp = () => (
  <Space wrap>
    <Progress type="circle" percent={180} format={(percent) => `${percent} Days`} />
    <Progress type="circle" percent={20} format={() => 'Done'} />
  </Space>
);
export default ProgDurationApp;