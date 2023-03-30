import { Box, Typography, TextField, Button } from '@mui/material';
import { useState, ChangeEvent, FormEvent } from 'react';
import AddCourse from '../../types/Course';
import axios from '../../axiosConfig';
import { useSnackbar } from 'notistack';

function CourseForm() {
   const [courseFormDetails, setCourseFormDetails] = useState<AddCourse>({
      title: '',
      prerequisite: '',
   });

   const { enqueueSnackbar } = useSnackbar();

   function OnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
      setCourseFormDetails((prev) => ({
         ...prev,
         [e.target.name]: e.target.value,
      }));
   }

   async function OnSubmitHandler(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
         const response = await axios.post('/add-course', courseFormDetails);
         enqueueSnackbar(response.data, { variant: 'success' });
         console.log(response);
         setCourseFormDetails({
            title: '',
            prerequisite: '',
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
         <Typography sx={{ mb: 3 }}>Add Course</Typography>
         <form onSubmit={OnSubmitHandler}>
            <TextField
               name="title"
               label="Title"
               type="text"
               variant="standard"
               fullWidth
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={OnChangeHandler}
               value={courseFormDetails.title}
            />
            <TextField
               name="prerequisite"
               label="Prerequisite"
               type="text"
               variant="standard"
               sx={{ mt: 2 }}
               fullWidth
               InputLabelProps={{
                  shrink: true,
               }}
               onChange={OnChangeHandler}
               value={courseFormDetails.prerequisite}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3 }}>
               Add
            </Button>
         </form>
      </Box>
   );
}

export default CourseForm;
