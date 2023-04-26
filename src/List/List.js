import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import ListMid from '../Components/ListMid/ListMid'
import ListEnd from '../Components/ListEnd/ListEnd'
import './list.css'

const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <ListMid/>
      <ListEnd/>
    </div>
  )
}

export default List
