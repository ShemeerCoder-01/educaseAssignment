import React from 'react'
import Button from '../Components/Common/Button'
import { useNavigate } from 'react-router-dom'



function LandingPage() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/signup');
  }
  console.log(process.env.REACT_APP_API_KEY);
  
  return (
    <div className='landingPage'>
      <h1 className='heading'>Welcome to PopX</h1>
      <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Button text={"Create Account"} handleClick={handleClick} />
      <Button text={"Already Registered? Login"} />
    </div>
  )
}

export default LandingPage