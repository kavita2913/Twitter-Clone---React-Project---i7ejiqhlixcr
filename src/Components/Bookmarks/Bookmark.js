import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookmarkMid from '../BookmarkMid/BookmarkMid';
import BookmarkEnd from '../BookmarkEnd/BookmarkEnd';
import './bookmark.css';
const Bookmark = () => {
  return (
    <div className='bookmark'>
      <Sidebar />
      <BookmarkMid />
      <BookmarkEnd />
    </div>
  )
}

export default Bookmark
