import React, { useEffect, useState } from 'react'
import '../CSS/ELogin.css'
import { Link } from 'react-router-dom';


function Elogin() {
    const initialValues={username:"",email:"",password:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value});
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formValues);
        }
    },[formErrors])
    const validate=(values)=>{
        const errors={};
        const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="Username is required!";
        }

        if(!values.email){
            errors.email="Email is required!";
        }
        else if(!regex.test(values.email)){
            errors.email="This is not a valid email format!";
        }

        if(!values.password){
            errors.password="Password is required!";
        }
        else if(values.password.length<4){
            errors.email="Password must be more than 4 characters";
        }
        else if(values.password.length>10){
            errors.email="Password cannot exceed more than 10 characters";
        }
        return errors;
    };
    return ( 
        <div className="Elog-container">
            <div className='Elog-outer'>
            <div className='Elog-left'>
            
            <form onSubmit={handleSubmit}><br/>
                <h1 style={{paddingLeft:"5%"}} >Employee Login</h1><br/>
                <div className="Elog-uiform">
                    <div className="Elog-field">
                        <label>Username</label><br/>
                        <input style={{height:"4vh",width:"40vh"}} type="text" name="username" placeholder="Enter your Username" 
                        value={formValues.username} onChange={handleChange}/>
                    </div>
                    <p className='Elog-error'>{formErrors.username}</p>

                    <div className="Elog-field">
                        <label>Email</label><br/>
                        <input style={{height:"4vh",width:"40vh"}}type="email" name="email" placeholder="Enter your Email" 
                        value={formValues.email} onChange={handleChange}/>
                    </div>
                    <p className='Elog-error'>{formErrors.email}</p>

                    <div className="Elog-field">
                        <label>Password</label><br/>
                        <input style={{height:"4vh",width:"40vh"}}type="password" name="password" placeholder="Enter your Password" 
                        value={formValues.password} onChange={handleChange}/>
                    </div> 
                    <p className='Elog-error'>{formErrors.password}</p>

                    <Link to='./Sidebar'>
                    <button style={{height:"5vh",width:"41vh",backgroundColor:"rgb(2, 158, 2)",border:"green"}} className="Elog-button">Log In</button>                  
                    </Link>
                </div>
            </form>
            <Link to='/ERegister'>Don't have an account? Register</Link>
            </div>
            <div className='Elog-right'>

                
            </div>
            </div>
        </div>
     );
}

export default Elogin;