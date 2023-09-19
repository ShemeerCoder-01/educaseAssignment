/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../Components/Common/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [company,setCompany] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        localStorage.setItem('username',name);
        try{
          await createUserWithEmailAndPassword(auth,email,password);
          navigate('/login');

        }
        catch(e){
            console.log("Error :",e);
        }

    }


  return (
    <div className='signUpPage'>
        <h1 className='login-heading'>Create your PopX account</h1>
        <form onSubmit={handleSubmit} className='form'>
            <input type='text' placeholder='Name'  onChange={e=> setName(e.target.value)} required/>
            <input type='number' placeholder='Number' onChange={e=> setNumber(e.target.value)} required/>
            <input type='email' placeholder='Email Address' onChange={e=> setEmail(e.target.value) } required/>
            <input type='password' placeholder='Password' onChange={e=> setPassword(e.target.value) } required/>
            <input type='text' placeholder='Company Name' onChange={e=> setCompany(e.target.value)} />
            <label> Are you an Agency?</label>
            <div style={{display:"flex", gap:"14px",margin:"1rem 0"}} className='radiolabel'>
                <label>  
                    <input type='radio' name='agency' style={{marginRight:"7px"}} value={"Yes"} required/>
                    Yes
                </label>
                <label>
                    <input type='radio' name='agency' style={{marginRight:"7px"}} value={"No"} />
                    No
                </label>
            </div>
            <Button text={"Create Account"}/>
        </form>
    </div>
  )
}

export default SignUpPage