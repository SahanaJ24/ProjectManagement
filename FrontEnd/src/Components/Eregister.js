import React, { useEffect, useState } from 'react'
import '../CSS/Eregister.css';
import { Link } from 'react-router-dom';

export const ERegister = (props) =>{
    const [email, setEmail]=useState('');
	// const [password, setPass]=useState('');
    const [name, setName]=useState('');
    const [gender, setGen]=useState('');
    const [dob, setDob]=useState('');
    const [number, setNum]=useState('');

    const [submitted, setSubmitted]=useState('');
    const [error, setError]=useState('');
	const [agreeTerms, setAgreeTerms] = useState(false);

    const handleSubmit = (e) =>{
		e.preventDefault();
		if (name === '' || email === ''  || gender==='' || dob==='' || number==='') {
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
				<h3 style={{color:"green"}}>User {name} has successfully registered</h3>
			</div>
		);
	};
	const errorMessage = () => {
		return (
			<div className="error"
				 style={{display: error ?'': 'none',
                 textAlign:'center',
                 paddingTop:10,}}>
				<h3 style={{color:"red",paddingRight:"20%"}}>Please enter all the fields</h3>
			</div>
		);
	};
    return ( 
        <div className="EReg-container">
            <div className='EReg-outer'>
            <div className='EReg-left'>
            <h1>Employee Registration</h1>
            <div className="errormessage" >
                {errorMessage()}
                {successMessage()}
            </div>
            
            <form className="fregister" onSubmit={handleSubmit}>
                <label style={{textAlign:"left"}} for="name"> Username </label><br/>
				<input  style={{height:"4vh",width:"40vh"}} value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" type="text" placeholder="Enter your Name"/><br/>

				<label style={{textAlign:"left"}}for="email" > Email </label><br/>
				<input style={{height:"4vh",width:"40vh"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/><br/>

                <label style={{textAlign:"left"}}> Gender</label><br/>
				<select style={{height:"5vh",width:"41vh"}} id="gender" value={gender} onChange={(e) => setGen(e.target.value)} required>
                                   <option value="">Select</option>
                                   <option value="Admin">Male</option>
                                   <option value="teamleader">Female</option>
                     	</select><br/>

                <label style={{textAlign:"left"}}>Date of Birth</label><br/>
				<input style={{height:"5vh",width:"40.5vh"}} value={dob} onChange={(e) => setDob(e.target.value)} name="dob" id="dob" type="date" placeholder="Date of Birth"/><br/>

                <label style={{textAlign:"left"}}>Mobile Number</label><br/>
				<input style={{height:"4vh",width:"40vh"}} value={number} onChange={(e) => setNum(e.target.value)} name="number" id="number" type="number" placeholder="Mobile Number"/>
				<div className="form-group">
                            <label htmlFor="agreeTerms">
                                   <input type="checkbox"
                                          id="agreeTerms"
                                          checked={agreeTerms}
                                          onChange={(e) => setAgreeTerms(e.target.checked)}
                                          required/>{' '}
                                          I agree to the terms and conditions
                                   </label>
	           </div><br/>
				<button style={{backgroundColor:"green",height:"5vh",width:"41vh",border:"green"}}  type="submit">Register</button>
			</form>
            <Link to='/Elogin'>Already have an account? Login here</Link>
            </div>

            <div className='EReg-right'>
                
            </div>
            </div>
        </div>
     );
}
