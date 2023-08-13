import React from 'react'
import "../../App.css";
import { SettingOutlined ,UserOutlined, BookOutlined, BarsOutlined, UserAddOutlined, FieldTimeOutlined } from '@ant-design/icons';

const Dashboard = () => {
  return (
    <div className='nav-links' >
      <nav className='nav-profile'>
        <ul>
          <li><button className='prof-button'><UserOutlined /> My Profile</button></li>
          <li><button> <BookOutlined /> Course Content</button></li>
          <li><button> <BarsOutlined /> Tasks</button></li>
          <li><button> <UserAddOutlined /> Attendance</button></li>
          <li><button> <FieldTimeOutlined /> Program Duration</button></li>
        </ul>
      </nav>

      <nav className='nav-settings'>
        <ul>
          <li>Reset Password</li>
          <li><SettingOutlined /> Settings</li>
        </ul>
      </nav>
    </div>
  )
}

export default Dashboard;