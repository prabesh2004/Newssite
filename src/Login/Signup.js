import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import "./Signin.css"
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [useremail, setUseremail] = useState('');
  const [confirmpassword, setconfirmPassword] = useState('');


  const navigate = useNavigate(); 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleUseremailChange = (e) => {
    setUseremail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleconfirmPasswordChange = (e) => {
    setconfirmPassword(e.target.value);
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
    <h3 className='log-text'>Don't have an account </h3>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="username">Create Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        </div>
        <div className="input-group">
           <label htmlFor="username" >Email</label>
        <input
          type="email"
          id="useremail"
          value={useremail}
          onChange={handleUseremailChange}
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
      <div className="input-group">
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          id="password"
          value={confirmpassword}
          onChange={handleconfirmPasswordChange}
          required
        />
      </div>
      <div className="last fullg">
      <button className='click full' type="submit">SIGN UP</button>
      </div>
     
    </form>
  </div>
  )
}

export default Signup