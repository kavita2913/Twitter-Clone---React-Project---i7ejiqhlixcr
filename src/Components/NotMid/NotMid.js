import React, { useState } from 'react';
import './notmid.css';
import SettingsIcon from '@mui/icons-material/Settings';
import TwitterIcon from '@mui/icons-material/Twitter';

const NotMid = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className='notmid'>
      <div className="notmid_notmidContainer">
        <h1>Notification <span className='notIcon'> <SettingsIcon /></span></h1>
        <nav>
          <ul>
            <li onClick={() => handleTabClick('All')} className={selectedTab === 'All' ? 'active' : ''}>All</li>
            <li onClick={() => handleTabClick('Verified')} className={selectedTab === 'Verified' ? 'active' : ''}>Verified</li>
            <li onClick={() => handleTabClick('Mentions')} className={selectedTab === 'Mentions' ? 'active' : ''}>Mentions</li>
          </ul>
        </nav>
        {selectedTab === 'All' &&
          <div className='all'>
            <p> <TwitterIcon />There was a login to your account from a new device<br></br> on Apr 06, 2023. Review it now.</p>
          </div>
        }

        {selectedTab === 'Verified' &&
          <div className='verify'>
            <img src='https://abs.twimg.com/responsive-web/client-web/verification-check-400x200.v1.46c9cb39.png' alt='picture' />
            <h1>Nothing to see here — <br></br>yet</h1>
            <p>Likes, mentions, Retweets, and a whole lot more<br></br> — when it comes from a verified account, you'll<br></br> find it here. Learn more</p>
          </div>
        }
        {selectedTab === 'Mentions' &&
          <div className='mention'>
            <h1 >Nothing to see here —<br></br> yet</h1>
            <p>When someone mentions you, you'll find it here.</p>
          </div>
        }
      </div>
    </div>
  );
};

export default NotMid;
