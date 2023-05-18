import React, { useState } from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import Tag from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarOption from '../SidebarOption/SidebarOption.js'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowLogoutDialog(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div className="sidebar">
      <TwitterIcon className='sidebar_twitterIcon' />
      <Link to="/home" className='anchor_tag'>
        <SidebarOption active Icon={HomeIcon} text="Home" />
      </Link>
      <Link to="/explore" className='anchor_tag'>
        <SidebarOption Icon={Tag} text="Explore" />
      </Link>
      <Link to="/notification" className='anchor_tag' >
        <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      </Link>
      <Link to="/message" className='anchor_tag' >
        <SidebarOption Icon={MailOutlineIcon} text="Message" />
      </Link>
      <Link to="/bookmark" className='anchor_tag' >
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      </Link>
      <Link to="/list" className='anchor_tag' >
        <SidebarOption Icon={ListAltIcon} text="Lists" />
      </Link>
      <Link to="/profile" className='anchor_tag' >
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </Link>
      <Link to="/profile" className='anchor_tag' >
        <SidebarOption Icon={MoreHorizIcon} text="More" />
      </Link>

      {/* <Button className='sidebar_tweet' variant='outlined'>Tweet</Button> */}
      <Button className='sidebar_logout' onClick={() => setShowLogoutDialog(true)}>Logout</Button>

      {showLogoutDialog && (
        <div className="dialog">
          <p>Are you sure you want to logout?</p>
          <Button onClick={handleLogout}>Yes <Link to="/"></Link></Button>
          <Button onClick={cancelLogout}>Cancel</Button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;

