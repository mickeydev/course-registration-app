import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import axios from '../../axiosConfig';
import AddStudent from '../../types/Student';
import { useSnackbar } from 'notistack';

function StudentForm() {
   const [studentFormDetails, setStudentFormDetails] = useState<AddStudent>({
      firstName: '',
      lastName: '',
      program: '',
   });

   const { enqueueSnackbar } = useSnackbar();

   function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
      setStudentFormDetails((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   }

   async function OnsubmitHandler(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
         const response = await axios.post('/add-student', studentFormDetails);
         enqueueSnackbar(response.data, { variant: 'success' });
         console.log(response);
      } catch (e: any) {
         console.log(e);
      }
   }

   return (
      <Box m={2}>
         <Typography sx={{ mb: 3 }}>Add Student</Typography>
         <form onSubmit={OnsubmitHandler}>
            <TextField
               name="firstName"
               label="First Name"
               type="text"
               variant="standard"
               fullWidth
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={onChangeHandler}
            />
            <TextField
               name="lastName"
               label="Last Name"
               type="text"
               variant="standard"
               sx={{ mt: 2 }}
               fullWidth
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={onChangeHandler}
            />
            <TextField
               name="program"
               label="Program"
               type="text"
               variant="standard"
               sx={{ mt: 2 }}
               fullWidth
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={onChangeHandler}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
               Add
            </Button>
         </form>
      </Box>
   );
}

export default StudentForm;
