import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TweetBox from '../Components/TweetBox';
import Post from '../Components/Post';
import Widgets from '../Components/Widgets'
import './Home.css';

function Home() {
  const [posts, setPosts] = useState([]);

  // Function to handle adding new post
  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
    // store new post in local storage
    localStorage.setItem('posts', JSON.stringify([newPost, ...posts]));
  };

  // Load posts from local storage when component mounts
  React.useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="home__feed">
        <TweetBox onAddPost={handleAddPost} />
        {posts.map((post, index) => (
          <Post
            key={index}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
      <Widgets posts={posts} />
    </div>
  );
}

export default Home;
