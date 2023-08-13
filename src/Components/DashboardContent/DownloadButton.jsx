
// import React, { useState } from 'react';
import { DownloadOutlined, Html5Outlined, } from '@ant-design/icons';
import { Button,  Space } from 'antd';

const DownloadButton = () => {
//   const [size, setSize] = useState('large'); // default is 'middle'

  return (
    <>
      {/* <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
        <Radio.Button value="large">Large</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider> */}
      <Space direction="vertical">
        
        <Space wrap>
          
          <Button type="primary" 
          icon={ <DownloadOutlined />}><Html5Outlined />
            
            Download
          </Button>
        </Space>
      </Space>
    </>
  );
};
export default DownloadButton;