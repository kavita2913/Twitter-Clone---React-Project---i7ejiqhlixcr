import React from 'react'
import './messageMid.css'
// import "../Widgets/Widgets.css"
import SettingsIcon from '@mui/icons-material/Settings';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';

const MessageMid = () => {
    return (
        <div className='messageMid'>
            <h1 className='msg'>Messages
                <div>
                    <span className='stng_icon'> <SettingsIcon /></span><span className='mail_icon'><MailOutlineIcon /></span>
                </div>
            </h1>
            <div className='data'>
                <h1 className='heading'>Welcome to your<br></br>inbox!</h1>
                <p>Drop a line, share Tweets and more with<br></br> private conversations between you and others<br></br> on Twitter. </p>
            </div>
            {/* <div> */}
            <Button className='message_btn'>Write a message</Button>
            {/* </div> */}
        </div>

    )
}

export default MessageMid
