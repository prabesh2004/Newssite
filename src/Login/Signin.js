import React, { useState } from 'react';
import './Signin.css';
import { RxCross2 } from 'react-icons/rx';
import {FaFacebook} from "react-icons/fa"
import {FaGoogle} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { useNavigate ,Link } from 'react-router-dom';
function Signin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
   
      <div className="signin-container">
        <div className="Cross"  ><RxCross2
                    onClick={()=>navigate(-1)}
                    size={30}
                  /></div>
        <h2 className='log-in'>Sky News</h2>
        <h3 className='log-text'>Have a account ?</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="last">
          <button className='click' type="submit">SIGN IN</button>
          <button className="forget">Forgot password?</button>
          </div>
          <Link to={"/signup"}><h3 className="log-text">Don't Have an account? <span>SIGN UP</span></h3></Link>
          <div className="socials">
          <FaGoogle size={30}/>
            <FaFacebook size={30}/>
            <FaTwitter size={30}/>
            <FaGithub size={30}/>
          </div>
        </form>
      </div>
  );
}

export default Signin;
