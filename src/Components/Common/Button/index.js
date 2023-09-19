import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

function Button({ text,handleClick }) {

  const navigate = useNavigate();

  return (
    <div>
      {
        text.charAt(0) === 'A' ? (
          <button className='btn' style={{ backgroundColor: "#6C25FF4B", color: "#1D2226" }} onClick={() => navigate('/login')}>{text}</button>
        ) : text.charAt(0) === 'L' ? (
          <button className='btn' style={{ backgroundColor: "#CBCBCB" }}>{text}</button>
        ) : (
          <button type='submit' onClick={handleClick}  className='btn'>{text}</button>
        )
      }
    </div>
  )
}

export default Button