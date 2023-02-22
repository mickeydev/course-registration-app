import React, { useContext } from "react";
import { Grid, Box } from "@mui/material";
import DashboardCard from "../../components/DashboardCard";
import { RegContext } from "../../store/register-context";

function DashboardCount() {

    const CTX = useContext(RegContext);

    return (
        <Box mb={2} mt={2}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                    <DashboardCard title="Tutors" total={CTX.instructorCount} />
                </Grid>

                <Grid item xs={12} md={2}>
                    <DashboardCard title="Course" total={CTX.courseCount} />
                </Grid>

                <Grid item xs={12} md={2}>
                    <DashboardCard title="Students" total={CTX.studentCount} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default DashboardCount;