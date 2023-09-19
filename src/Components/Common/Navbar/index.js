import React, { useEffect, useState } from 'react';
import './style.css';

const coolBackgroundColors = ['#e74c3c', '#3498db',  '#2ecc71',   '#f1c40f',  '#9b59b6',  '#1abc9c',  '#e67e22', '#34495e',  '#e82c0c',  '#27ae60', '#8e44ad', '#16a085', '#f39c12', '#2980b9', '#c0392b',];
const textColors=["#F8F8FF","#0C0C0C"];
const max = coolBackgroundColors.length;
const min = 0;


function NavBar({setIsClicked,isClicked}) {
  const [bgColor] = useState(coolBackgroundColors[Math.floor(Math.floor(Math.random() * (max - min)) + min)]);
  const [color] = useState(textColors[Math.floor(Math.random()* (textColors.length-min)+min)]);
  const [user,setUser] = useState('');

  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(user){
        setUser(user?.charAt(0).toUpperCase());
    }
  },[]);

  return (
    <div>
      <div className='nav'>
        <p>Account settings</p>
        {user?<div className='signoutDiv' style={{backgroundColor:bgColor}}><button className='signoutBtn' onClick={()=> setIsClicked(!isClicked)} style={{color:color}}>{user}</button></div>:''}
      </div>
    </div>
  
  )
}

export default NavBar;