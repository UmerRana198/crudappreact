// import React, { useState } from 'react';
// import { FormControl, InputLabel, MenuItem, Select, TextField, Button, Grid } from '@mui/material';

// const FormComponent = () => {
//   const [selectedProject, setSelectedProject] = useState('');
//   const [billType, setBillType] = useState('');
//   const [comments, setComments] = useState('');
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleProjectChange = (event) => {
//     setSelectedProject(event.target.value);
//   };

//   const handleBillTypeChange = (event) => {
//     setBillType(event.target.value);
//   };

//   const handleCommentsChange = (event) => {
//     setComments(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform form submission logic here
//     // e.g., send data to server, update state, etc.

//     // Reset form fields
//     setSelectedProject('');
//     setBillType('');
//     setComments('');
//     setSelectedDate(null);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container spacing={2} style={{marginTop:'10px'}}>
//         <Grid item xs={12} sm={4}>
//           <FormControl fullWidth>
//             <label>Project Name</label>
//             {/* <InputLabel id="project-label">Project</InputLabel> */}
//             <Select
//               labelId="project-label"
              
//               value={selectedProject}
//               onChange={handleProjectChange}
//               required
//             >
//               <MenuItem value="All Projects">All Projects</MenuItem>
//               <MenuItem value="Mohlanwal">Mohlanwal</MenuItem>
//               <MenuItem value="Orchards">Orchards </MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <FormControl fullWidth>
//             {/* <InputLabel id="bill-type-label">Bill Type</InputLabel> */}
//             <label>Bill Type</label>
//             <Select
//               labelId="bill-type-label"
       
//               value={billType}
//               onChange={handleBillTypeChange}
//               required
//             >
//               <MenuItem value="Electricity">Electricity</MenuItem>
//               <MenuItem value="Maintenance">Maintenance</MenuItem>
//               {/* <MenuItem value="Orchards">Orchards </MenuItem> */}
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//             <label>Report Date</label>
//           <FormControl fullWidth>
//             <TextField
             
              
//               type="date"
//               value={selectedDate}
//               onChange={handleDateChange}
//               required
//               InputLabelProps={{
//                 shrink: true,
//               }}
//             />
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <FormControl fullWidth>
//             <TextField
//               id="comments"
//               label="Comments"
//               multiline
//               rows={4}
//               value={comments}
//               onChange={handleCommentsChange}
//               required
//             />
//           </FormControl>
//         </Grid>
//         <Grid item xs={12}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             style={{ marginTop: 20 }}
//           >
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default FormComponent;