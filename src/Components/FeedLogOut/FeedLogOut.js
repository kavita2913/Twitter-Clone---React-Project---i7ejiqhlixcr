import React from 'react'
// import '../WidgetsLogOut/WidgetsLogOut.css'
import "../Widgets/Widgets.css"
import "./FeedLogOut.css"
import Search from "@mui/icons-material/Search";


function FeedLogOut() {
  return (
    <div className='feedLogOut'>
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

export default FeedLogOut