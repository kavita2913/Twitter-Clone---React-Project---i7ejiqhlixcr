import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from '../SidebarOption/SidebarOption';
import Tag from '@mui/icons-material/Tag';
import Settings from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

function SidebarLogout(props) {
  const { setLog } = props;
  const [logInform, setLoginform] = useState(false);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [emailLog, setEmailLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  // const [signUp, setSignUp] = useState([]);

  const handleSignUpClick = () => {
    setLoginform(false);
  };

  const handleSubmit = () => {
    setLoginform(true);
  };

  const handleLogin = () => {
    if (emailLog === 'KAVITASAINI' && passwordLog === 'KAVITA@123') {
      setLog(true);
    } else {
      alert('Wrong email or password');
    }
  };

  const handleAddTweetClick = () => {
    if (!logInform) {
      // TODO: Implement adding a new tweet
      console.log('Add tweet clicked');
    } else {
      alert('You must be logged in to add a tweet.');
    }
  };

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SidebarOption Icon={Tag} text="Explore" />
      <SidebarOption Icon={Settings} text="Setting" />
      {logInform && (
        <div className="form">
          <div className="Email">
            <p>Phone, email, or username</p>
            <input
              type="text"
              onChange={(e) => setEmailLog(e.target.value)}
              value={emailLog} required
            />
          </div>
          <div className="Password">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => setPasswordLog(e.target.value)}
              value={passwordLog} required
            />
          </div>
          <Button
            variant="outlined"
            className="sidebar_tweet login"
            onClick={handleLogin}
          >
            Log In
          </Button>
        </div>
      )}
      {!logInform && (
        <>
          <Button
            variant="outlined"
            className="sidebar_tweet login"
            onClick={handleSubmit}
          >
            Log In
          </Button>
//           <Button
//             variant="outlined"
//             className="sidebar_tweet login"
//             onClick={handleSignUpClick}
//           >
//             Sign Up
//           </Button>
        </>
      )}
      {logInform && (
        <Button
          variant="outlined"
          className="sidebar_tweet"
          onClick={handleAddTweetClick}
        >
          Add tweet
        </Button>
      )}
    </div>
  );
}

export default SidebarLogout;
