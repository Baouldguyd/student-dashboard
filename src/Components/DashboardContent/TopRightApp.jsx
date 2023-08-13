import React from 'react';
import {
  HomeOutlined,
  LogoutOutlined,
  SettingFilled,
  SmileOutlined,
  UserOutlined,
  BellOutlined,
  
} from '@ant-design/icons';

import { Space } from 'antd';

const TopRightApp = () => {
    return(
    <Space style={{marginRight: "2rem"}}>
        <HomeOutlined style={{color:"white"}} />
        <SettingFilled style={{color:"white"}} />
        <SmileOutlined style={{color:"white"}} />
        <UserOutlined style={{color:"white"}} />
        <BellOutlined style={{color:"white"}}/>
        <LogoutOutlined style={{color:"white"}} />
        
        
        
  </Space>
    )
}

export default TopRightApp;