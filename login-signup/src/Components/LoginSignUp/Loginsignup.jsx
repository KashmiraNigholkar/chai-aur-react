import React, { useState } from 'react';
import './LoginSignUp.css';

import userIcon from '../Assets/user.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';

const Loginsignup = () => {
  const [action,setAction]=useState("Login");


  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action ==="Login"?<div></div>:<div className="input">
          <img src={userIcon} alt="user" />
          <input type="text" placeholder="Username" />
        </div>}
        

        <div className="input">
          <img src={emailIcon} alt="email" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={passwordIcon} alt="password" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot-Password?<span>Click here!</span></div>}
      
      <div className="submit-container">
      <div className={action==="Login "?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      
      
      </div>


    
  );
};

export default Loginsignup;
