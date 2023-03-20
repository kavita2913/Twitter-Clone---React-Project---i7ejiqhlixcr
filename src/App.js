import React from 'react';
import { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Feed from './Components/Feed/Feed.js';
import Widgets from './Components/Widgets/Widgets.js';
// import SidebarLogOut from './Components/SidebarLogOut/SidebarLogOut.js';
import SidebarLogOut from './Components/SidebarLogOut/SidebarLogOut.js';
import FeedLogOut from './Components/FeedLogOut/FeedLogOut.js';
import WidgetsLogOut from './Components/WidgetsLogOut/WidgetsLogOut.js';
import './styles.css';
// import './Home';
// import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  const [log,setLog] = useState(false)
  console.log(log);
  return (
    <div className="app">

     {/* <Sidebar/>
    <Feed/>
     <Widjet/> */}
    {log?<Sidebar setLog={setLog} />:<SidebarLogOut setLog={setLog} />}
     {/* <SidebarLogOut setLog={setLog} /> */}
     {log?<Feed/>:<FeedLogOut/>}
     {/* <FeedLogOut/> */}
     {log?<Widgets/>:<WidgetsLogOut/>}
     {/* <WidjetLogOut/>*/}
    
   
    </div>
  );
}

export default App;