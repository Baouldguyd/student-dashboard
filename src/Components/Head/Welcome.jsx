import React from 'react'
import sailLogo from '../../Assets/sail-logo.png';
import TopRightApp from '../DashboardContent/TopRightApp';




const Welcome = () => {
  return (
    <div className='welcome-head' >
        
        <div className="sail-logo">
        <img src={sailLogo} alt="sail-logo"  />
        </div>
        <p>Students Portal</p>
        <TopRightApp/>
    </div>
  )
}

export default Welcome;