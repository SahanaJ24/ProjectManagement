import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/report.css';

import { Button, TextField, Box } from '@mui/material';

import { useDispatch } from 'react-redux';
import { login } from "../Features/user";
import { logout } from "../Features/user";
import { useSelector } from 'react-redux';


function Report() {
	const dispatch = useDispatch();
	const navigate=useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };
  const validateUsername = () => {
    if (!password) {
      setUsernameError('Username is required');
    } else {
      setUsernameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();
    validateUsername();

    // Additional login logic can be added here, e.g., sending the form data to a server for authentication.

    // Perform the redirect to the 'ehome' page if there are no errors
    if (!emailError && !passwordError) {
      window.location.href = '/EmpSidebar'; // Redirect using window.location.href
    }
  };

	return (
		<div className="rep-container">
			<div className='rep-outer'>
            <div className='rep-left'>
            <form className='rep-login' onSubmit={handleSubmit}>
        
          <h1>Login</h1>
          <label style={{ color: 'black' }}><b>UserName</b></label><br/>
          <br></br>
          <b>
            <TextField
              id="outlined-basic"
              style={{width:"60%"}}
              label="username"
              variant="outlined"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onBlur={validateUsername}
              error={!!usernameError}
              helperText={usernameError}
            /><br />
          </b>
          <label style={{ color: 'black' }}><b>Email</b></label><br></br>
          <br></br>
          <b>
            <TextField
            style={{width:"60%"}}
              id="outlined-basic"
              label="email"
              variant="outlined"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              error={!!emailError}
              helperText={emailError}
            /><br />
          </b>
          <label style={{ color: 'black' }}><b>Password</b></label><br></br>
          <br></br>
          <TextField
          style={{width:"60%"}}
            id="outlined-basic"
            label="password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
            error={!!passwordError}
            helperText={passwordError}
          /><br /><br />
          
        
        <Box >
          <Button style={{backgroundColor:"green"}}  variant="contained" color="secondary" type='submit' onClick={() => { dispatch(login({ email }));navigate("/EmpSidebar") }}>Login</Button>
        </Box>
        <br></br>
        
				<Link to='/Eregister'>Don't have an account? Register</Link>
        
      </form>
      </div>

			<div className='rep-right'> 
      
            </div>
			</div>
			</div>
			
	)
}
export default Report;