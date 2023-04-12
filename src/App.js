import React from 'react';
// import { useState } from 'react';
import './styles.css';
import Home from './HomePage/HomePage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import NewRegistration from './NewRegister/NewRegistration';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/registration' element ={<NewRegistration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

