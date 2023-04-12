import React, { useState } from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
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
    // handle logout actions here
    setShowLogoutDialog(false);
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutDialog(false);
  };

  return (
    <div className="sidebar">
      <TwitterIcon className='sidebar_twitterIcon' />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button className='sidebar_tweet' variant='outlined'>Tweet</Button>
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
