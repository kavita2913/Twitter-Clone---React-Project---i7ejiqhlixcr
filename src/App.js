import React from 'react';
// import { useState } from 'react';
import './styles.css';
import Home from './HomePage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import NewRegistration from './NewRegistration';


function App() {
  // const [log,setLog] = useState(false)
  // console.log(log);
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

