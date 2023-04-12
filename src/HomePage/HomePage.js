import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Feed from '../Components/Feed/Feed'
import Widgets from '../Components/Widgets/Widgets'
// import './styles.css'
// import '../src/Components/homePage.css'
import './homePage.css'

function HomePage() {
    return (

        <div className='homePage'>
            <div >
                <Sidebar className='sidebar' />
            </div>
            <div>
                <Feed className='feed' />
            </div>
            <div> <Widgets className ='widgets' />
            </div>

        </div >
    )
}

export default HomePage
