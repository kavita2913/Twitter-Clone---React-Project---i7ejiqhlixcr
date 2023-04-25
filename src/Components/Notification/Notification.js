import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NotMid from '../NotMid/NotMid'
import NotEnd from '../NotEnd/NotEnd'
import './notification.css'

const Notification = () => {
    return (
        <div className='notification'>
            <Sidebar />
            <NotMid />
            {/* <Widgets /> */}
            <NotEnd/>
        </div>
    )
}

export default Notification
