import React from 'react';
import '../Widgets/Widgets.css';
import { Button } from '@mui/material';

function WidgetsLogOut() {
  return (
    <div className='widgets'>
      <div className='widgets_container'>
        <h2>New To Twitter?</h2>
        <Button variant='outlined' className='widgets_button'>Sign up now</Button>
      </div>
    </div>
  )
}

export default WidgetsLogOut;
