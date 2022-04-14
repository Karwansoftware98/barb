// import React, { useRef, useState } from 'react';
// import Popup from 'reactjs-popup';
// import tw from "twin.macro";
// import form from "../../pages/FindBarber"
// import './style.css';

// const PhoneNumber = tw.input`flex-1 border rounded-lg border-gray-300 pl-3 w-0`;


// export default (props) => (

  
//   <Popup
//     trigger={<button className="button">Book Now</button>}
//     modal
//     nested

//   >
//     {close => (

//           <div className="modalBackground">
           
//           <div className="modalContainer">
//             <div className="titleCloseBtn">
//             <button className="close" onClick={close}>
//                 &times;
//              </button>
//             </div>
//             <div className="title">
//               <h1>Take Appointment at: {props.name}</h1>
//             </div>
//             <form >

//             <div className="body"> 

//             {/* <span>pick a date </span> */}
//              <input  type="date" />

//             {/* <span>pick a time</span> */}
//              <input  type="time" />

//             {/* <span>your phone number </span> */}
//              <input  type="phone"  placeholder='phone number'/>

//             </div>
//             <div className="footer">
//             <button
//             id="cancelBtn"
//             className="close" onClick={close}>
//               Cancel
//              </button>
//               <button>Submit</button>

//             </div>
//               </form>

//           </div>

//         </div>
     
       
//     )}
//   </Popup>
// );

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import emailjs from '@emailjs/browser';


const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const time = document.getElementById('ph')


  

 
    const form = React.useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m0u2rbb', 'template_a8mbpe2', e.target, 'M4WzK2yrWt8xsOaQt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      }
  return (
    <div>
      <Button onClick={handleOpen}>Book Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
      <form ref={form} onSubmit={sendEmail}>
      <Stack spacing={2}>
            <label>Date</label>
            <input type="date" name="date" required/>
            <input type="hidden" name="name" value={props.name}/>
            <input type="hidden" name="email" value={props.email}/>

            <label>Time</label>
            <input  fullWidth type="time" name="time" required/>
            <label>Phone</label>
            <input type="number" name="phone" required/>
            <Grid container spacing={4}>
              <Grid item xs={4}>
              <Button variant="outlined" color="error"  onClick={handleClose}>
            Cancel
          </Button> 
              </Grid>
              <Grid item xs={4}>
              <input type="submit" value="Send" color="success"/>

              </Grid>
              
        </Grid>
      </Stack>
    </form>
    </Box>
        {/* <Box sx={style}>
          
        
       
        <Stack spacing={2}>

        <Typography variant="h6" component="h6">
           Taking Appointment At:   {props.name}
        </Typography>

    <Stack component="form" noValidate spacing={3}>
      <TextField
      name="date"
        id="date"
        label="Pick Date"
        type="date"
        defaultValue="2022-03-24"
        fullWidth
 
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
      name="time"
        id="time"
        label="Pick Time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        fullWidth
      />
       
    </Stack>

      
          <TextField type="number" id="ph" fullWidth label="Phone number"  />
          <Grid container spacing={4}>
              <Grid item xs={4}>
              <Button variant="outlined" color="error"  onClick={handleClose}>
            Cancel
          </Button> 
              </Grid>
              <Grid item xs={4}>
              <Button variant="contained" color="success" type="submit"  onSubmit={sendEmail}>
              Submit
           </Button>
              </Grid>
              
        </Grid>
        </Stack>

      
        
        
         

           
        </Box> */}
      </Modal>
    </div>
  );
}