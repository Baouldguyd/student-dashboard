import React from 'react';
import { Avatar, List } from 'antd';
import DownloadButton from './DownloadButton';
const data = [
  {
    title: 'HTML',
  },
  {
    title: 'CSS',
  },
  {
    title: 'JAVASCRIPT',
  },
  {
    title: 'REACT',
  },
];
const App = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Info here"
        />
        <DownloadButton />
      </List.Item>
    )}
  />
);
export default App;
