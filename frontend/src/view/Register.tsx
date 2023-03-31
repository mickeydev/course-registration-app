import React from "react"
import { Box } from "@mui/material"
import RegisterForm from "../section/RegisterSections/RegisterForm"
import Typography from "@mui/material/Typography"

function Register() {
    return <Box m={3}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>Registeration</Typography>

        <Box>
            <RegisterForm />
        </Box>

        <Box>Data preview</Box>

    </Box>
}

export default Register