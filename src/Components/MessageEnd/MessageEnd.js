import { Button } from '@mui/material'
import React from 'react'
import './messageEnd.css'
const MessageEnd = () => {
  return (
    <div className='messageEnd'>
      <div className='message_data'>
        <h3>Select a message</h3>
        <p>Choose from your existing conversations, start a<br></br> new one, or just keep swimming.</p>
      </div>
      <div>
        <Button className='messageEnd_btn'>New message</Button>
      </div>
    </div>
  )
}

export default MessageEnd
