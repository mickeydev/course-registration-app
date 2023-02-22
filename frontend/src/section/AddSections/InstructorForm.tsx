import { Box, Typography, TextField, Button } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "../../axiosConfig";
import AddInstructor from "../../types/Instructor";
import { useSnackbar } from 'notistack';

function InstructorForm() {
    const [instructorFormDetails, setInstructorFormDetails] = useState<AddInstructor>({
        title: "",
        name: "",
        department: ""
    });

    const { enqueueSnackbar } = useSnackbar();

    function OnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setInstructorFormDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function OnSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await axios.post("/add-instructor", instructorFormDetails)
            enqueueSnackbar(response.data, { variant: 'success' })
            console.log(response);
        } catch (e: any) {
            console.log(e)
        }
    }

    return (
        <Box m={2}>
            <Typography sx={{ mb: 3 }}>Add Instructor</Typography>
            <form onSubmit={OnSubmitHandler}>
                <TextField name="title" label="Title" type="text" variant="standard" fullWidth InputLabelProps={{
                    shrink: true,
                }} onChange={OnChangeHandler} />
                <TextField name="name" label="Full Name" type="text" variant="standard" sx={{ mt: 2 }} fullWidth InputLabelProps={{
                    shrink: true,
                }} onChange={OnChangeHandler} />
                <TextField name="department" label="Department" type="text" variant="standard" sx={{ mt: 2 }} fullWidth InputLabelProps={{
                    shrink: true,
                }} onChange={OnChangeHandler} />

                <Button type="submit" variant="contained" sx={{ mt: 3 }}>Add</Button>
            </form>

        </Box>
    )
}


export default InstructorForm