import React, { useState } from 'react'
import UserImage from '../assets/UserImage.jpg';
import camerIcon from '../assets/CamerIcon.jpg';
import NavBar from '../Components/Common/Navbar';
import SignoutModel from '../Components/SignoutModel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function SettingPage() {
    const [isClicked,setIsClicked] = useState(false);
    const [user,setUser] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const user = localStorage.getItem('user');
        const username = localStorage.getItem('username');
        if(!user){
            navigate('/login');
        }
        else{
            const userObj = {
                user,
                username
            };
            setUser(userObj);
        }
    },[navigate]);


  return (
    <div>
         <NavBar setIsClicked={setIsClicked} isClicked={isClicked}/>
         {isClicked? <SignoutModel setIsClicked={setIsClicked}/>:null}
        <div className='settingPage'>
            <div className='container'>
                <div className='left'>
                    <img id='user' src={UserImage} alt='User'/>
                    <img id='icon' src={camerIcon} alt='camera'/>
                </div>
                <div className='right'>
                    <h3>{user?.username}</h3>
                    <p className='userEmail'>{user.user}</p>
                </div>
            </div>
            <p className='settings-para'>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
        </div>
    </div>
  )
}

export default SettingPage