import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import ListMid from '../ListMid/ListMid'
import ListEnd from '../ListEnd/ListEnd'
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
