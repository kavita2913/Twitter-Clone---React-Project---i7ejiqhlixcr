import React from 'react'
import './profile.css'
import Sidebar from '../Sidebar/Sidebar'
import ProfileMid from '../ProfileMid/ProfileMid'
import ProfileEnd from '../ProfileEnd/ProfileEnd'

const Profile = () => {
  return (
    <div className='profile'>
      <Sidebar />
      <ProfileMid />
      <ProfileEnd />
    </div>
  )
}

export default Profile
