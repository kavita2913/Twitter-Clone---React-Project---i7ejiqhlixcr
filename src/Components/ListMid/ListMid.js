import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SpeakerNotesTwoToneIcon from '@mui/icons-material/SpeakerNotesTwoTone';
import Button from '@mui/material/Button';
import './listMid.css';

const ListMid = () => {
  return (
    <div className='listMid'>
      <h3 className='list_data'>Lists
        <div>
          <span className='newList'><PlaylistAddIcon /></span><span><MoreHorizIcon /></span>
        </div>
      </h3>

      <div className='pinned_list'>
        <h3>Pinned Lists</h3>
        <p>Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
      </div>
      <div className='discover_newlist'>
        <h2>Discover new Lists</h2>
      </div>
      <div className='opposite'>
        <SpeakerNotesTwoToneIcon style={{ fontSize: '40px', color: 'skyblue', margin: '5px' }} />
        <h3>Opposition Leaders
          <div className='button'>
            <button>Follow</button>
          </div>
        </h3>
      </div>
      <div className='opposite_sec'>
        <SpeakerNotesTwoToneIcon style={{ fontSize: '40px', color: 'red', margin: '5px' }} />
        <h3>
          Political Leaders
          <div className='button1'>
            <button>Follow</button>
          </div>
        </h3>
      </div>
      <div className='show_btn'>
      <Button>Show More</Button>
      </div>
    </div>
  )
}

export default ListMid
