import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Feed from './Components/Feed/Feed'
import Widgets from './Components/Widgets/Widgets'
// import './styles.css'
// import '../src/Components/homePage.css'
import './homePage.css'

function HomePage() {
    return (

        <div className='homePage'>
            <div >
                <Sidebar />
            </div>
            <div>
                <Feed />
            </div>
            <div> <Widgets />
            </div>

        </div >
    )
}

export default HomePage
