import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MessageMid from '../MessageMid/MessageMid'
import MessageEnd from '../MessageEnd/MessageEnd'
import './message.css'
const Message = () => {
  return (
    <div className='message'>
      <Sidebar />
      <MessageMid />
      <MessageEnd />
    </div>
  )
}

export default Message;
