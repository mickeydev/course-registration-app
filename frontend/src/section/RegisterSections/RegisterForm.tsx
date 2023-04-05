import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { RegContext } from "../../store/register-context";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";
import addRegister from "../../types/register";
import axios from "../../axiosConfig";
import { useSnackbar } from "notistack";



function RegisterForm() {
    const [registerData, setRegisterData] = useState<addRegister>({
        roomNo: 0,
        time: '',
        sectionNo: 0,
        year: 0,
        semester: '',
        student_id: 0,
        course_id: 0,
        instructor_id: 0,
    })
    const CTX = useContext(RegContext);

    const { enqueueSnackbar } = useSnackbar();

    function OnChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setRegisterData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function OnSubmitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const response = await axios.post('/register', registerData);
            enqueueSnackbar(response.data, { variant: 'success' });
            console.log(response);

        } catch (e: any) {
            console.log(e);

            if (e.response.status === 400) {
                enqueueSnackbar('Fill all required details', { variant: 'error' });
            }
        }
    }


    return (
        <form onSubmit={OnSubmitHandler}>
            <Box
                sx={{
                    '& > :not(style)': { width: '25ch', mb: 2, mr: 2 },
                    display: "flex",
                    flexWrap: "wrap"
                }}
            >
                <TextField name="roomNo" type="number" id="roomno" label="Room No" variant="outlined" onChange={OnChangeHandler} />
                <TextField name="time" type="text" id="classTime" label="Class Time" variant="outlined" onChange={OnChangeHandler} />
                <TextField name="sectionNo" type="number" id="sectionno" label="Section No" variant="outlined" onChange={OnChangeHandler} />
                <TextField name="semester" type="text" id="semester" label="Semester" variant="outlined" onChange={OnChangeHandler} />
                <TextField name="year" type="number" id="year" label="Year" variant="outlined" onChange={OnChangeHandler} />
                <TextField
                    name="student_id"
                    id="student-select"
                    select
                    label="Student"
                    defaultValue=" "
                    onChange={OnChangeHandler}
                >
                    <MenuItem value={" "}><Typography variant="subtitle2" fontStyle="italic">Select Student</Typography> </MenuItem>
                    {CTX.studentData.map((option) => (
                        <MenuItem key={option.id} value={option.id} sx={{ m: 1 }}>
                            {option.firstName + " " + option.lastName}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    name="instructor_id"
                    id="teacher-select"
                    select
                    label="Teacher"
                    defaultValue=" "
                    onChange={OnChangeHandler}
                >
                    <MenuItem value={" "}><Typography variant="subtitle2" fontStyle="italic">Select Teacher</Typography> </MenuItem>
                    {CTX.instructorData.map((option) => (
                        <MenuItem key={option.id} value={option.id} sx={{ m: 1 }}>
                            {option.title + " " + option.name}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    name="course_id"
                    id="course-select"
                    select
                    label="Course"
                    defaultValue=" "
                    onChange={OnChangeHandler}
                >
                    <MenuItem value={" "}><Typography variant="subtitle2" fontStyle="italic">Select Course</Typography> </MenuItem>
                    {CTX.courseData.map((option) => (
                        <MenuItem key={option.id} value={option.id} sx={{ m: 1 }}>
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>
            <Box>
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </form>
    );
}

export default RegisterForm;

function enqueueSnackbar(data: any, arg1: { variant: string; }) {
    throw new Error("Function not implemented.");
}


function setCourseFormDetails(arg0: { title: string; prerequisite: string; }) {
    throw new Error("Function not implemented.");
}
