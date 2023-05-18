import React from 'react';
import './styles.css';
import HomePage from './HomePage/HomePage.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import NewRegistration from './NewRegister/NewRegistration';
import Explore from '../src/Components/Explore/Explore';
import Notification from './Components/Notification/Notification';
import Message from './Components/Messages/Message';
import Bookmark from './Components/Bookmarks/Bookmark';
import List from './Components/List/List';
import Profile from './Components/Profile/Profile';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/registration' element={<NewRegistration />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/message' element={<Message />} />
        <Route path='/bookmark' element={<Bookmark />} />
        <Route path='/list' element={<List />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;         
