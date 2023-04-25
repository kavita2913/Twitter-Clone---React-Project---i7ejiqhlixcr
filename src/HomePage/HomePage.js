import React from 'react';
import Sidebar from '../Components/Sidebar/Sidebar';
import Feed from '../Components/Feed/Feed';
import Widgets from '../Components/Widgets/Widgets';
import './homePage.css';

function HomePage() {
  return (
    <div className='homePage'>

      <Sidebar className='sidebar' />
      <Feed className='feed' />
      <Widgets className='widgets' />


    </div>
  );
}

export default HomePage;
