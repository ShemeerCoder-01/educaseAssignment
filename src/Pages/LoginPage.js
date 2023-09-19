import React, { useState } from 'react';
import Button from '../Components/Common/Button';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function LoginPage() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!email || !password){
          return setErrorMsg("Please fil in all fields");
        }
        try{
          await signInWithEmailAndPassword(auth,email,password);
          localStorage.setItem('user',email);
          setErrorMsg('');
          navigate('/setting');
        }
        catch(err){
          console.log(err);
          setErrorMsg("Invalid User credentials.!");
        }
    }


  return (
    <div className='loginPage'>
        <h1 className='login-heading'>Signin to your PopX account</h1>
        <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <form onSubmit={handleSubmit} className='form login-form'>
            <TextField
            className='input' 
            sx={{
                "& .MuiInputLabel-root": {
                  bottom:"6px"
                },
                "& .MuiInputBase-input , & .MuiOutlinedInput-input":{
                  fontSize:"12px",
                  padding:"14px 7px",
                  height:"22px"
                }
            }}
            label="Enter Email Address" 
            variant='outlined'
            type='email' 
            id='email' 
            onChange={e=> setEmail(e.target.value)} 
            required
            />

            <TextField
            className='input' 
            sx={{
                "& .MuiInputLabel-root": {
                  bottom:"6px"
                },
                "& .MuiInputBase-input , & .MuiOutlinedInput-input":{
                  fontSize:"12px",
                  padding:"14px 7px",
                  height:"22px"
                }
            }}
            label="Enter Password" 
            variant='outlined'
            type='password' 
            id='password' 
            onChange={e=> setPassword(e.target.value)} 
            required
            />

            <div style={{color:"red"}}>{errorMsg}</div>
            <Button text={"Login"}/>
        </form>
        
    </div>
  )
}

export default LoginPage