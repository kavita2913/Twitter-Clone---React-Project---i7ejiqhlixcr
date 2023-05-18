import React, { useState, useEffect } from 'react';
import './profileMid.css';
import { Avatar } from '@mui/material';

const ProfileMid = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = users.username;
    setUsername(loggedInUser);
  }, []);

  return (
    <div className='profile_mid'>
      <div className='profile_header'>
        <div className='profileMid_avatar'>
          <Avatar
            className='profile_avatar'
            src='https://imgs.search.brave.com/V5ISbSs-f_ZHYnttNH20_AnL9KwG44iHIflqNhDmfLM/rs:fit:474:474:1/g:ce/aHR0cHM6Ly93b25k/ZXItZGF5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My93b25kZXItZGF5/LWF2YXRhci1zbWls/ZXktNDUucG5n'
          />
        </div>
        {/* <h1>{username}</h1> */}
      </div>
      <div className='button_div'>
        <button>Set up profile</button>
      </div>
      <div className='userName'>
        <h1>{username}</h1>
      </div>
        <div className='followers'>
        <h4> 0 Following 0 Followers</h4>
      </div>
      <div className='profileMid_profileMid_Container'>
        <nav>
          <ul>
            <li>Tweets</li>
            <li>Replies</li>
            <li>Media</li>
            <li>Likes</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProfileMid;
