import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import './TweetBox.css';
import db from '../firebase.js';
import firebase from 'firebase/compat';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();

    const image = tweetImage.trim() !== '' ? tweetImage : null;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);

    db.collection('posts').add({
      displayName: users.username,
      username: users.username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      Verified: true,
      text: tweetMessage,
      image: image,
      avatar:
        'https://imgs.search.brave.com/V5ISbSs-f_ZHYnttNH20_AnL9KwG44iHIflqNhDmfLM/rs:fit:474:474:1/g:ce/aHR0cHM6Ly93b25k/ZXItZGF5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My93b25kZXItZGF5/LWF2YXRhci1zbWls/ZXktNDUucG5n',
    });

    setTweetMessage('');
    setTweetImage('');
  };

  const handleTweetClick = (e) => {
    e.preventDefault();
    if (tweetMessage.trim() === '' && tweetImage.trim() === '') {
      window.alert('Please fill the input boxes!');
    } else {
      sendTweet(e);
    }
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://imgs.search.brave.com/V5ISbSs-f_ZHYnttNH20_AnL9KwG44iHIflqNhDmfLM/rs:fit:474:474:1/g:ce/aHR0cHM6Ly93b25k/ZXItZGF5LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/My93b25kZXItZGF5/LWF2YXRhci1zbWls/ZXktNDUucG5n" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            type="text"
            value={tweetMessage}
            placeholder="What's happening?"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_imageInput"
          value={tweetImage}
          placeholder="Enter image URL (optional)"
          type="text"
        />
        <Button onClick={handleTweetClick} className="tweetBox_tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
