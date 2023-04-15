import React from 'react'
import "../Widgets/Widgets.css"
import "./exploreMid.css"
import Search from "@mui/icons-material/Search";

const ExploreMid = () => {
  return (
    <div className='exploreMid'>
    {/* <h2>widjet</h2> */}
    <div className="widgets_input">
      <Search className="widgets_searchIcon"/>
      <input type="text" placeholder='Search twitter' />
    </div>
    <div className="widgets_widgetContainer">
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
