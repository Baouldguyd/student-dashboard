import React from 'react';
import { Avatar, List } from 'antd';
import ContactButton from './ContactButton';
import RatingsApp from './Ratings';


const data = [
  {
    title: 'Mr. John',
  },
  {
    title: 'Mr. Matthew',
  },
  {
    title: 'Mr. Phillip',
  },
  {
    title: 'Mr. Sodiq',
  },
];
const FacilitatorsApp = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
        <div>
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="have any questions?, reach out!!"
        />

        <ContactButton/>
      </List.Item>
      <RatingsApp/>
      </div>
    )}
  />
);
export default FacilitatorsApp;
