import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import { ChangeEvent, FormEvent, useState, useContext } from 'react';
import axios from '../../axiosConfig';
import AddStudent from '../../types/Student';
import { useSnackbar } from 'notistack';
import { RegContext } from '../../store/register-context';

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
         setStudentFormDetails({
            firstName: '',
            lastName: '',
            program: '',
         });
      } catch (e: any) {
         console.log(e);

         if (e.response.status === 400) {
            enqueueSnackbar('Fill all required details', { variant: 'error' });
         }
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
               value={studentFormDetails.firstName}
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
               value={studentFormDetails.lastName}
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
               value={studentFormDetails.program}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
               Add
            </Button>
         </form>
      </Box>
   );
}

export default StudentForm;
