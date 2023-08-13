
import React from 'react';
import { SlackOutlined, MailOutlined, } from '@ant-design/icons';
import { FloatButton } from 'antd';


const FloatHelp = () => (
  <>
    <FloatButton
      icon={<SlackOutlined />}
      type="primary"
      style={{
        right: 24,
      }}
    />
    <FloatButton
      icon={<MailOutlined/> }
      type="default"
      style={{
        right: 94,
      }}
    />
  </>
);
export default FloatHelp;