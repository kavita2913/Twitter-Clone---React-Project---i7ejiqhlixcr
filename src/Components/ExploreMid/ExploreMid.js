import React from 'react'
import "./exploreMid.css"
import Search from "@mui/icons-material/Search";
import SettingsIcon from '@mui/icons-material/Settings';

const ExploreMid = () => {
  return (
    <div className='exploreMid'>
      <div className="explore_input_container">
        <div className="explore_input">
          <Search className="explore_searchIcon" />
          <input type="text" placeholder='Search twitter' />
        </div>
        <div className="settingIcon">
          <SettingsIcon />
        </div>
      </div>
      <div className="explore_exploreContainer">
        <nav>
          <ul>
            <li>For You</li>
            <li>Trending</li>
            <li>News</li>
            <li>Sports</li>
            <li>Entertainment</li>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default ExploreMid
