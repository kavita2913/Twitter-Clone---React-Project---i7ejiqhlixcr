import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ExploreMid from '../ExploreMid/ExploreMid';
import ExploreEnd from '../ExploreEnd/ExploreEnd';
import './explore.css';

const Explore = () => {
  return (
    <div className="explore-container">
      <Sidebar />
      <ExploreMid />
      <ExploreEnd />
    </div>
  );
}

export default Explore;
