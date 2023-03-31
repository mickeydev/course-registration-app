import React from "react";
import { Box, TextField, InputBase, Autocomplete } from "@mui/material";


function RegisterForm() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: "flex",
                flexWrap: "wrap"
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="roomno" label="Room No" variant="outlined" />
            <TextField id="classTime" label="Class Time" variant="outlined" />
            <TextField id="sectionno" label="Section No" variant="outlined" />
            <TextField id="semester" label="Semester" variant="outlined" />
            <TextField id="year" label="Year" variant="outlined" />
            <Autocomplete
                disablePortal
                id="student"
                options={["top100Films", "Amriva"]}
                renderInput={(params) => <TextField {...params} label="Student" />}
            />
            <Autocomplete
                disablePortal
                id="course"
                options={["top100Films", "Amriva"]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Course" />}
            />
            <Autocomplete
                disablePortal
                id="teacher"
                options={["top100Films", "Amriva"]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Teacher" />}
            />
        </Box>
    );
}

export default RegisterForm;