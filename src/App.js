import React from 'react';
import './styles.css';
import Home from './HomePage/HomePage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import NewRegistration from './NewRegister/NewRegistration';
 import Explore from '../src/Components/Explore/Explore'
//  import ExploreMid from './Components/ExploreMid/ExploreMid';

function App() {
  
  return (
    
    <BrowserRouter>
    {/* <ExploreMid/> */}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/registration' element ={<NewRegistration/>}/>
        <Route path='/explore' element={<Explore/>}/>
      </Routes>
      {/* <Explore /> */}

    </BrowserRouter>
  );
}

export default App;         
