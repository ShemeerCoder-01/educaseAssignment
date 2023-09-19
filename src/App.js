import React from 'react';
import './App.css'
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import SettingPage from './Pages/SettingPage';

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signUp' element={<SignUpPage/>}/>
        <Route path='/setting' element={<SettingPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
