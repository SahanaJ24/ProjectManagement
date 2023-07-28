import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { SignInSchema } from './schema/loginSchema';
import UserAuthService from '../services/userAuthService';
import { useDispatch, useSelector } from "react-redux";
import { addEmails,addToken } from './Stores/masterSlice'
import '../CSS/Alogin.css';
import { useUser } from './userContext';

const Mlogin = () => {
  const user=useSelector(state => state.user.value)
  const { userEmail, setUserEmail } = useUser();
  const [email, setEmail] = useState('');

  const dispatch=useDispatch();
  const initialState = {
    email: "",
    password: "",
  };
  const { values, errors,  handleBlur, handleChange,handleSubmit, touched } =
    useFormik({
      initialValues: initialState,
      validationSchema: SignInSchema,
      onSubmit: (values, action) => {
        console.log(values);
        eventLogin();
        action.resetForm();
      }
    })

  const eventLogin = async () => {
    try {
      const response = await UserAuthService.loginUserWithEmailAndPassword(values);
      console.log(response);
      var token = response.data.accessToken;
      var userEmail = response.data.email;

      if (response.message != "Request failed with status code 400") {
        setTimeout(() => {
          dispatch(addEmails(userEmail));
          dispatch(addToken(token));
          setUserEmail(userEmail);

          navigate("/mhome");
        }, 100);
      }
      else {
        <h1>Login failed:(</h1>
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <div className='Alog-container'>
      <div className='Alog-outer'>
      <div className='Alog-left'>
      <form className='flogin' onSubmit={handleSubmit}>
        
          <h1 style={{  }}>Login</h1><br></br>
          <br></br>
          <b>
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              type="text"
              variant="standard"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              size="small"
              style={{ marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            {errors.email && touched.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : null}

          </b>
          
          <br></br>
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            type="password"
            variant="standard"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            style={{ marginTop: "20px" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br /><b>
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
          </b>
          <br></br>
          <br></br>
        
        <Box >
          <Button variant="contained" color="success" type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <h5 style={{}}>
          Don't have an account ?{" "}
          <span>
            <a
              onClick={() => navigate("/mregister")}
              style={{ cursor: "pointer"}}
            >
              Sign Up
            </a>
          </span>{" "}
        </h5>
      </form>
      </div>
			<div className='Alog-right'> 
      </div>
			</div>
    </div>
  );
}

export default Mlogin;