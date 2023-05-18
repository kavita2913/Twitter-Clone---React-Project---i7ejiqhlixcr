import React from 'react'
import './profileEnd.css'
import { Search } from '@mui/icons-material'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'

const ProfileEnd = () => {
  return (
    <div className='profileEnd'>
      <div className='profileEnd_input'>
        <Search className='profileEnd_searchIcon' />
        <input placeholder='Search Twitter' type='text' />
      </div>
      <div className='profileEnd_profileEndContainer'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='1637080675642687488' />
        <TwitterTimelineEmbed sourceType='profile' screenName='KavitaSaini29' options={{ height: 400 }} />
        <TwitterShareButton url={"https://www.facebook.com/profile.php?id=100025440051321"} options={{ text: 'Hello', via: "KavitaSaini29" }} />
      </div>
    </div>
  )
}

export default ProfileEnd
