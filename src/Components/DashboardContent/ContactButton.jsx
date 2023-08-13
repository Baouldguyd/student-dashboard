import { Button, Space } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const ContactButton = () => {

  return (
    
      <Space wrap>
        
        <Button type="primary" >
        <MessageOutlined /> Contact Me
        </Button>
        
      </Space>
    // </Space>
  );
};
export default ContactButton;