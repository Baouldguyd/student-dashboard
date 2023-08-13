import React from 'react';
import { Layout, theme } from 'antd';
import "../App.css"
import profilePic from '../Assets/profilePic.png'
import Main from '../Main';
import SlidingApp from './Main/SlidingApp';
import FloatHelp from './DashboardContent/FloatHelp';


const { Content, Footer, Sider } = Layout;

const LayoutApp = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{border: '1px solid black'}}>
      
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}

    
        
      >
        <div className="demo-logo-vertical" />
        <div className='sailLogo'>

        </div>
        <div 
        className='profileImgDiv'
        style={{
          height: '6rem', 
          width:'6rem', 
          backgroundColor:'green',
          display: 'block', 
          margin: 'auto',
          marginTop: '2rem',
          borderRadius: '50px',
          borderColor: "3px solid #1f2937"
          
        }}
        >
          <img src={profilePic} 
          className='profileImg'
          style={{
          width:'100%',
          height:'100%',
          borderRadius: "50%"
        }} 
        
          alt='profile'/>
          
        </div>

        <Main />
        
      </Sider>


      <Layout 
      
      >
      
        <div style={{display:'flex',

        marginLeft: '1rem'
      }}>
        <span
        style={{fontSize:'1.2rem', fontWeight:"bold"}}>Hello </span> <span id='firstName' style={{fontSize:'1.2rem', fontWeight:"bold"}}>Firstname</span><span id='lastName' style={{fontSize:'1.2rem', fontWeight:"bold"}}>Lastname</span>
        </div>
        
        <Content style={{ margin: '24px 16px 0' }}>
        
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        
        <SlidingApp/>
          
        </div>
        
        </Content>
        <FloatHelp/>
        <Footer style={{ textAlign: 'center' }}>©2023 Created by G5 SAIL TECH-TALENT</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutApp;