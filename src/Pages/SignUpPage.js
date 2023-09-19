/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Button from '../Components/Common/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function SignUpPage() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');
    const [agency,setAgency] = useState('');
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem('username', name);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login');

        }
        catch (e) {
            console.log("Error :", e);
        }

    }



    return (
        <div className='signUpPage'>
            <h1 className='login-heading'>Create your PopX account</h1>
            <form onSubmit={handleSubmit} className='form'>
                <TextField
                    className='input'
                    sx={{
                        "& .MuiInputLabel-root": {
                            bottom: "6px"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#6C25FF"
                        },
                        "& .MuiInputBase-input , & .MuiOutlinedInput-input": {
                            fontSize: "12px",
                            padding: "14px 7px",
                            height: "22px"
                        },
                        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CBCBCB"
                        }
                    }}
                    type='text'
                    label="Full Name"
                    placeholder='Enter Name'
                    variant='outlined'
                    onChange={e => setName(e.target.value)}
                    required
                />

                <TextField
                    className='input'
                    sx={{
                        "& .MuiInputLabel-root": {
                            bottom: "6px"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#6C25FF",
                        },
                        "& .MuiInputBase-input , & .MuiOutlinedInput-input": {
                            fontSize: "12px",
                            padding: "14px 7px",
                            height: "22px"
                        },
                        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CBCBCB"
                        }
                    }}
                    type='number'
                    label="Phone number"
                    placeholder='Enter Number'
                    variant='outlined'
                    onChange={e => setNumber(e.target.value)}
                    required
                />

                <TextField
                    className='input'
                    sx={{
                        "& .MuiInputLabel-root": {
                            bottom: "6px"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#6C25FF"
                        },
                        "& .MuiInputBase-input , & .MuiOutlinedInput-input": {
                            fontSize: "12px",
                            padding: "14px 7px",
                            height: "22px"
                        },
                        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CBCBCB"
                        }
                    }}
                    type='email'
                    label="Email Address"
                    placeholder='Enter email'
                    variant='outlined'
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <TextField
                    className='input'
                    sx={{
                        "& .MuiInputLabel-root": {
                            bottom: "6px"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#6C25FF"
                        },
                        "& .MuiInputBase-input , & .MuiOutlinedInput-input": {
                            fontSize: "12px",
                            padding: "14px 7px",
                            height: "22px"
                        },
                        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CBCBCB"
                        }
                    }}
                    type='password'
                    label="Password"
                    placeholder='Enter password'
                    variant='outlined'
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <TextField
                    className='input'
                    sx={{
                        "& .MuiInputLabel-root": {
                            bottom: "6px"
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                            color: "#6C25FF"
                        },
                        "& .MuiInputBase-input , & .MuiOutlinedInput-input": {
                            fontSize: "12px",
                            padding: "14px 7px",
                            height: "22px"
                        },
                        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#CBCBCB"
                        }
                    }}
                    type='text'
                    label="Company Name"
                    placeholder='Enter Company name'
                    variant='outlined'
                    onChange={e => setCompany(e.target.value)}
                />

                <label> Are you an Agency?</label>
                <div style={{ display: "flex", gap: "14px", margin: "1rem 0" }} className='radiolabel'>
                    <label>
                        <input type='radio' checked={agency=== 'Yes'} onChange={e=> setAgency(e.target.value)}  style={{ marginRight: "7px"}} value={"Yes"} required />
                        Yes
                    </label>
                    <label>
                        <input type='radio' checked={agency === 'No'} onChange={e=> setAgency(e.target.value)}  style={{ marginRight: "7px" }} value={"No"} />
                        No
                    </label>
                </div>
                <Button text={"Create Account"} />
            </form>
        </div>
    )
}

export default SignUpPage