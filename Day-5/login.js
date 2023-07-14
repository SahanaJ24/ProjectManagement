import React, { useState } from "react";
import '../CSS/LogReg.css'
import { Link } from "react-router-dom";

export const Login = (props) =>{
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
		<div className="container">
			<h2>Log In</h2>

			<div className="message" >
                {errorMessage()}
                {successMessage()}
            </div>

			<form className="flogin" onSubmit={handleSubmit}>
				<label> Username </label>
				<input value={id} onChange={(e) => setId(e.target.value)} name="id" id="id" type="text" placeholder="Username"/>

				<label for="email" > Email </label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

				<label for="password" > Password </label>
				<input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="password"/>
			</form><br/>
				<Link to='/Sidebar'>
					<div className="loginButton">
				<button type="submit" >Log In</button>
				

					</div>
				</Link><br/><br/>
			<Link to='/Register'>Don't have an account? Register</Link>
			<br/>	<br/>
				</div>
				</div>
	)
}