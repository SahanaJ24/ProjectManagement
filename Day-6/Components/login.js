import React, { useState } from "react";
import '../CSS/LogReg.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {login,logout} from '../features/user'
import {useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Login = (props) =>{

	const dispatch=useDispatch();
//   const navigate=useNavigate();
//   const user=useSelector(state => state.user.value);

	const [email, setEmail]=useState('');
	const [password, setPass]=useState('');
	const [id, setId]=useState('');
	const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');

    const handleSubmit = (e) =>{
		e.preventDefault(); 
		if (id === '' || email === '' || password === '') {
			setError(true);
		} 
        else{
			setSubmitted(true);
			setError(false);
		}
	}

    const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',}}>
				<h3>User {id} has successfully Logged In</h3>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h3>Please enter all the fields </h3>
			</div>
		);
	};

	return(
		<div className="all">
		<div className="logreg-container">
			<h2>Log In</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="flogin" onSubmit={handleSubmit}>
				<label style={{textAlign:"left"}}> Username </label>
				<input style={{height:"3vh"}} className="username" value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="text" placeholder="Username"/>

				<label style={{textAlign:"left"}} for="email" > Email </label>
				<input style={{height:"3vh"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

				<label style={{textAlign:"left"}} for="password" > Password </label>
				<input style={{height:"3vh"}} value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
			</form><br/>
				<Link to='/Sidebar'>
					<div className="loginButton">
				<button style={{backgroundColor:"green",height:"7vh"}} onClick={()=>{dispatch(login({email}));/*navigate("/Sidebar")*/}} type="submit" >Log In</button>
				

					</div>
				</Link><br/><br/>
			<Link to='/Register'>Don't have an account? Register</Link>
			<br/>	<br/>
				</div>
				</div>
	)
}