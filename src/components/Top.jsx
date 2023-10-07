import React from 'react'
import Box from '@mui/material/Box';
import logo from '../assets/logo.png'
import SegmentIcon from '@mui/icons-material/Segment';


export default function Top() {
  return (
    <div className='top_wrapper'>
       <div className='container'>
        <div 
         style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding:'10px'
         }}
        >
            
            <img src={logo} alt="" width="200" />
            <SegmentIcon style={{fontSize:'35px',color:'white'}}/>
        </div>
         <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh', 
            color: 'white',
            fontSize:40
          }}
         >
          <h3>Building the future with</h3>
          <h3>technology with <span style={{color:'#FD2DA3'}}>OTA</span></h3>
         </Box>
       </div>
    </div>
  )
}
      